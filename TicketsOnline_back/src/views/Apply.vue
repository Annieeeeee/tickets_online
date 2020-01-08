<template>
<div>
  <div id="fixed" >
    <img src='../assets/image/normal_bg.png' style="width:100vw;height:calc(100vh);">
  </div>
  <el-form :model="applyForm":rules="applyRule" ref="applyForm" label-width="80px" class="demo-ruleForm apply-container">
    <h2 class="title">TicketsOnline 注册</h2>
    <el-form-item label="注册邮箱">
        <el-input v-model="applyForm.email"></el-input>
    </el-form-item>
    <el-form-item label="设置密码">
        <el-input v-model="applyForm.password"></el-input>
    </el-form-item>
    <el-form-item label="输入昵称">
        <el-input v-model="applyForm.name"></el-input>
    </el-form-item>
    <el-form-item label="联系电话">
        <el-input v-model="applyForm.tel"></el-input>
    </el-form-item>
    <el-form-item label="年  龄">
        <el-input v-model="applyForm.age"></el-input>
    </el-form-item>
    <el-form-item label="性  别">
        <el-radio v-model="applyForm.gender" label="male">男</el-radio>
        <el-radio v-model="applyForm.gender" label="female">女</el-radio>
    </el-form-item>
    <el-form-item label="所在部门">
        <el-select v-model="applyForm.org" filterable placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :applyForm.org="item.value">
            </el-option>
        </el-select>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="handleApply">立即申请</el-button>
        <el-button @click="handleLogin">已有账号</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
          applyForm:{
            name:'',
            password:'',
            email:'',
            tel:'',
            avatar:'',//如何上传图片。
            gender:'',
            org:'',//。
            age:'',//。
          },
          applyRule:{
              name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
             ],
             password:[
                 { required:true,message:'请输入密码',trigger:'blur'},
             ],
             email:[
                 { required:true,message:'请输入邮箱',trigger:'blur'},
             ],
             tel:[
                 { required:true,message:'请输入手机号码',trigger:'blur'},
                 { min:11, max:11,  message: '请输入11位手机号码', },
             ],
          },

          options: [{
          value: '1',
          label: '学术部'
        }, {
          value: '2',
          label: '体育部'
        }, {
          value: '3',
          label: '人力部'
        }, {
          value: '4',
          label: '文艺部'
        }, {
          value: '5',
          label: '国际部'
        }],
      };
    },
    methods: {
      //返回登陆界面
      handleLogin(){
        this.$router.push({ path: '/login' });
      },
      //提交申请，跳转到申请原因界面
      handleApply(){
        this.$router.push({ path: '/submit' });
      },
    }
  }
</script>

<style lang="scss" scoped>
  #fixed{
    position:fixed;
    top:0;/*定格顶部的秘诀！*/
    z-index: -1;
  }

  .apply-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-left: 35%;
    margin-top:4%;
    width: 400px;
    padding: 35px 35px 15px 35px;
    background: #FFF;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
  }


</style>