<template>
<div>
  <div id="fixed" >
    <img src='../assets/image/login_bg.png' style="width:100vw;height:calc(100vh);">
  </div>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h2 class="title">TicketsOnline 登录</h2>
    <el-form-item prop="email">
      <el-input type="text" v-model="ruleForm2.email" auto-complete="off" placeholder="邮箱账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" placeholder="请输入密码" auto-complete="off" v-model="ruleForm2.password" ></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;"@click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
      <el-button type="text" class="apply" @click="handleApply">申请账号</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  import { sendLoginMessage } from '../api/login';
  import bg from '../assets/image/login_bg.png';
  //import NProgress from 'nprogress'
  export default {
    data() {
      return {

        logining: false,
        ruleForm2: {
          email: '12345@tongji.edu.cn',
          password: '123',
        },
        rules2: {
          email: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleApply(){
        this.$router.push({ path: '/apply' });
      },
      handleSubmit2:function() {
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            let data=Object.assign({},this.ruleForm2);
            sendLoginMessage(data).then((response)=>{
              this.addLoading=false;
              this.$message({
                message:'登录成功！',
                type:'success'
              });
              sessionStorage.setItem("email",this.ruleForm2.email);
              sessionStorage.setItem("user",response);
              console.log("response",response);
              //this.$store.dispath("setEmail",this.ruleForm2.email);
              //this.$store.dispath("setToken",response);

              this.$router.push({path:'/normalAdmin'});
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
        return true;
      }
    }
  }

</script>

<style lang="scss" scoped>
  #fixed{
    position:fixed;
    top:0;/*定格顶部的秘诀！*/
    z-index: -1;
  }
  
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-left: 60%;
    margin-top:10%;
    width: 350px;
    padding: 35px 35px 15px 35px;
    /*background: #FFF;*/
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
    .apply{
    color:#000;
    margin: 0px 0px 35px 84%;
  }
  }
</style>