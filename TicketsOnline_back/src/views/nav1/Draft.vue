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
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
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
			<el-table-column prop="name" label="活动名称" width="810" sortable>
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

		<!--编辑界面-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="活动名称" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="活动时间">
					<el-col :span="11">
					<el-date-picker type="datetime" placeholder="选择时间" v-model="editForm.applyTime" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="活动类型">
					<el-radio-group v-model="editForm.type">
						<el-radio-button
							v-for="item in typeOptions"
							:key="item.value"
							:label="item.label"
							:editForm.type="item.value">
						</el-radio-button>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="活动概述">
					<el-input type="textarea" v-model="editForm.introduction"></el-input>
				</el-form-item>
				<el-form-item label="活动地点">
					<el-input type="textarea" v-model="editForm.address"></el-input>
				</el-form-item>
				<el-form-item label="承办部门">
					<el-radio-group v-model="editForm.organization">
						<el-radio-button
							v-for="item in organOptions"
							:key="item.value"
							:label="item.label"
							:editForm.organization="item.value">
						</el-radio-button>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="赞助商">
					<el-input v-model="editForm.sponsor"></el-input>
				</el-form-item>
				<el-form-item label="活动内容">
					<el-input type="textarea" v-model="editForm.content"></el-input>
				</el-form-item>
				<el-form-item label="活动人数">
					<el-input-number v-model="editForm.peopleAmount" :min="0" ></el-input-number>
				</el-form-item>
				
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">保存</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		
		<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="活动名称" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="预约时间">
					<el-date-picker
						v-model="addForm.applyTime"
						type="datetime"
						@change="dateChange">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="开始时间">
					<el-date-picker
						v-model="addForm.time_start"
						type="datetime"
						@change="dateChange">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="结束时间">
					<el-date-picker
						v-model="addForm.time_end"
						type="datetime"
						@change="dateChange">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="活动类型">
					<el-radio-group v-model="addForm.type">
						<el-radio-button
							v-for="item in typeOptions"
							:key="item.value"
							:label="item.label"
							:addForm.type="item.value">
						</el-radio-button>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="活动概述">
					<el-input type="textarea" v-model="addForm.introduction"></el-input>
				</el-form-item>
				<el-form-item label="活动地点">
					<el-input type="textarea" v-model="addForm.address"></el-input>
				</el-form-item>
				<el-form-item label="承办部门">
					<el-radio-group v-model="addForm.organization">
						<el-radio-button
							v-for="item in organOptions"
							:key="item.value"
							:label="item.label"
							:addForm.organization="item.value">
						</el-radio-button>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="赞助商">
					<el-input v-model="addForm.sponsor"></el-input>
				</el-form-item>
				<el-form-item label="活动内容">
					<el-input type="textarea" v-model="addForm.content"></el-input>
				</el-form-item>
				<el-form-item label="活动人数">
					<el-input-number v-model="addForm.peopleAmount" :min="0" ></el-input-number>
				</el-form-item>
				

			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">保存</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getDraftListPage,addDrafts} from '../../api/drafts';
	import {removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

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

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					applyTime:'',
					//time: date1+date2,//活动时间
					type:'',//活动类别
					introduction:'',//活动概述
					address:'',//活动地点
					organization:'',//活动承办部门
					sponsor:'',//赞助商
					poster:'',//活动海报
					content:'',//活动详情
					peopleAmount:'',//活动人数
				},
				//新增界面数据
				addForm: {
					activityId: 0,
					address: "",
					applyTime:new Date,
					content: "",
					id: 0,
					introduction: "",
					name: "",
					normalAdminId: 10000,
					organizationId: 0,
					peopleAmount: 0,
					poster: null,
					sponsor: "",
					status: 1,
					time_end:new Date,
					time_start:new Date,
					type: ""
				},
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
						{ required: true, message: '请输入活动名称', trigger: 'blur' }
					]
				},
				

			}
		},
		methods: {
			//性别显示转换
			dateChange(val){
				return console.log(val);
			},
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getDrafts();
			},
			//获取草稿列表
			getDrafts() {
				let para = {
					id:""
				};
				this.listLoading = true;
				//NProgress.start();
				getDraftListPage(para).then((res) => {
					this.drafts = res.data;
					this.total = this.drafts.length;
					this.listLoading = false;
					//NProgress.done();
					console.log(res.data);
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
				this.addForm = {};
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
							para.applyTime = (!para.applyTime || para.applyTime == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd hh-mm-ss');
							console.log(para.applyTime);
							addDrafts(para).then((res) => {
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