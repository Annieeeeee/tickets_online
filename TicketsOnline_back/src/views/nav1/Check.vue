<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="活动名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getDrafts">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="drafts" highlight-current-row @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="id" label="ID" width="100">
			</el-table-column>
			<el-table-column prop="name" label="活动名称" width="830" sortable>
			</el-table-column>
			<el-table-column  prop="status" label="审核状态" width="110">
				<template scope="scope">
					<el-tag
						disable-transitions>{{scope.row.status}}</el-tag>
				</template>
			</el-table-column>
		</el-table>

	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';
	import { getDraftListPage} from '../../api/drafts';
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				drafts: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列

				//活动种类
				typeOptions: [{
							value: 1,
							label: '讲座'
							}, {
							value: 2,
							label: '文娱'
							}, {
							value: 3,
							label: '体育'
							}, {
							value: 4,
							label: '展览'
							}, {
							value: 5,
							label: '社团'
							},{
							value: 6,
							label: '竞赛'
						}],
				//部门类型
				organOptions: [{
							value: 10001,
							label: '学术部'
						}],
				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				

			}
		},
		methods: {
			
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getDrafts();
			},
			//获取用户列表
			getDrafts() {
				let para = {
					id:""
				};
				let i=0;
				this.listLoading = true;
				//NProgress.start();
				getDraftListPage(para).then((res) => {
					this.drafts = res.data;
					this.total = this.drafts.length;
					this.listLoading = false;
					//NProgress.done();
					console.log(res.data);
					for(i=0;i<this.total;i++){
						if(this.drafts[i].status==3){
							this.drafts[i].status='已通过';
						}else if(this.drafts[i].status==2){
							this.drafts[i].status='已拒绝';
						}else if(this.drafts[i].status==1){
							this.drafts[i].status='待审核';
						}else if(this.drafts[i].status==0){
							this.drafts[i].status='草稿';
						}
					}
				});
				
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getDrafts();
					});
				}).catch(() => {

				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				};
			},
			//图片
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getDrafts();
							});
						});
					}
				});
			},
			//新增
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.addForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							addUser(para).then((res) => {
								this.addLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['addForm'].resetFields();
								this.addFormVisible = false;
								this.getDrafts();
							});
						});
					}
				});
			},
			selsChange: function (sels) {
				this.sels = sels;
			},
			//批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getDrafts();
					});
				}).catch(() => {

				});
			}
		},
		mounted(){
			this.getDrafts();
			console.log(this.drafts);
		}
	}

</script>

<style scoped>

</style>