<template>
<section>
 <!--卡片们-->
    <el-row :gutter="20">
            <!--就改这里一行-->
            <el-col :span="6" v-for="(data,index) in data" :key="data" :offset="1" style="margin-bottom:5%;height:500px;">
                <el-card :body-style="{ padding: '0px'}" shadow="hover" >
                    <div style="padding: 6px">
                        <img :src="data.poster" class="image">
                        <div style="padding: 14px;">
                        <span >{{data.name}}</span>
                        <div class="bottom clearfix" style="text-align: right">
                        <el-button type="primary" @click="handleEdit(data)" >详情</el-button>
                        <el-button type="primary" @click="handleComment(data.id)" >评论</el-button>
                        </div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>

      <el-dialog title="详情" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="活动名称">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="开始时间">
					<el-input v-model="editForm.time_start" auto-complete="off" ></el-input>
				</el-form-item >
        <el-form-item label="结束时间">
					<el-input v-model="editForm.time_end" auto-complete="off" ></el-input>
				</el-form-item>
        <el-form-item label="活动详情">
					<el-input type="textarea" v-model="editForm.content" auto-complete="off" ></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click.native="editFormVisible = false">关闭</el-button>
			</div>
		</el-dialog>

    <el-dialog title="评论" v-model="commentVisible":close-on-click-modal="false">
      <el-table :data="comment" highlight-current-row v-loading="listLoading"  style="width: 100%;">
			<el-table-column prop="content" label="评论内容">
			</el-table-column>
		</el-table>
      <div slot="footer" class="dialog-footer">
				<el-button type="primary" @click.native="commentVisible = false">关闭</el-button>
			</div>
    </el-dialog>

    
</section>
</template>
<style>

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
import { getActivities,getComments} from '../../api/activity';
export default {
  data() {
    return {
      data:[],
      comment:[],
      currentDate: new Date(),
      editFormVisible: false,//编辑界面是否显示
      commentVisible:false,
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
					time_start:'',
          time_end:'',
          introduction:'',
          address:'',
          content:'',
				},
    }; 
  },
  methods:{
        handleEdit: function (data) {
				  this.editFormVisible = true;
				  this.editForm = Object.assign({},data);
			},
        handleComment:function(data){
          this.commentVisible=true;
          this.getComment(data);
        },
        getComment(activityId){
          console.log("id",activityId);
          this.listLoading=true;
          getComments(activityId).then((res)=>{
            this.comment=res.data;
            this.listLoading = false;
            console.log("comment",this.comment);
          });
        },
        getActivity() {
          let para = {
            id:""
          };
          this.listLoading = true;
          //NProgress.start();
          getActivities(para).then((res) => {
            this.data = res.data;
            console.log(this.data);
            this.total = this.data.length;
            this.listLoading = false;
            //NProgress.done();
            console.log(res.data);
          });
			},

      
  },
  mounted(){
      console.log("给我跑通吧5555");
			this.getActivity();
			console.log("hhhhhhh");
		}
}
</script>