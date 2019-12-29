<template>
<div>
  <div id="absolute">
    <img src="./../assets/img/login_bg.png" style="width:100vw;height:calc(100vh);">
  </div>
  <div id="box">
  <el-card id="box-card">
    <div slot="header" class="clearfix">
      <span style="float:left; font-size:20px; color:#6eb5ac">TicketsOnline 登录</span>
    </div>
    <div id="body">
      <div id="title1">用户邮箱</div>
      <el-input v-model="email" placeholder="请输入邮箱" class="input"></el-input>
      <div id="title2">密码</div>
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input> 
      <div id="button">
        <el-button id="button1" @click="routeTo('Register')">注 册</el-button>
        <el-button type="primary" id="button2" @click="login">登 录</el-button>
      </div>  
    </div>
  </el-card>
</div>
</div>
</template>

<script>

export default {
    inject: ['reload'],
    name: "Login",
    components: {

    },
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      routeTo(name, params) {
        this.$router.push({name, params});
      },
      login() {
        //需要验证是否登陆成功
        this.setValidate();
      },
      setValidate() {
        this.$router.push({path: "/"})
      }
    },
    
}
</script>

<style scoped>
#absolute{
  position:absolute;
  z-index: -1;
}

#box {
  padding:9%;
}

#box-card {
  margin-left: 54%;
  width: 400px;
} 

#title1 {
  font-size:15px;
  color: #8f9292;
  float:left;
  padding-bottom: 6px;
  padding-left: 2px;
}

#title2 {
  font-size:15px;
  color: #8f9292;
  float:left;
  padding-bottom: 6px;
  padding-left: 2px;
  margin-top: 26px;
}

#button{
  display: flex;
  height:40px;
  margin-top: 34px;
  justify-content: center;
}

#button1 {
  flex-grow: 2;
}
#button2 {
  flex-grow: 2;
}


</style>

<style>
.el-button {
  font-size: 15px;
  font-weight: 600;
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