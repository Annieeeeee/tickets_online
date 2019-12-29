<template>
<div id="bottom1"> 
  <div id="title">Tickets Online</div>
  <div v-if="login" id="login">
   <el-avatar icon="el-icon-user-solid" style="margin-right:6px;"></el-avatar>
   <el-dropdown id="dropdown">
    <span id="el-dropdown-link">{{user.name}}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="routeTo('MyActivity')">我的活动</el-dropdown-item>
      <el-dropdown-item @click.native="routeTo('MyAccount')">账号设置</el-dropdown-item>
      <el-dropdown-item>退出登录</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
  </div>
  <div v-else id="visitor">
       <el-button type="primary" icon="el-icon-user" id="button2" plain @click="routeTo('Login')">登录 / 注册</el-button>
  </div>
  <div><el-button type="text" id="button3" @click.native="routeTo('Homepage')">首页</el-button></div>
</div>

</template>

<script>
export default {
    name: 'Navigator',
    components: {

    },
    data () {
        return {
           login:true,
           user: {
               imgUrl:'',
               name:'ahazss',
           }
        }
    },
    methods: {
        routeTo(name, params) {
            this.$router.push({name, params});
        },
    },
    mounted () {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
#bottom1 {
   width:100%;
   height:44px;
   margin:0;
   padding: 0;
   background-color:#ffffff;
   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
   display:flex;
}

#title {
    float:left;
    margin-left: 20px;
    margin-top: 10px;
    color:#6eb5ac;
    font-size:22px;
    font-weight:700;
}

#button2 {
    float: right;
    margin-right: 40px; 
    height: 34px; 
    margin-top:5px; 
    padding-top:0;
    padding-bottom: 0;
}

#login {
    margin-left: 860px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#visitor {
    margin-left:860px;
}
#button3 {
    padding-top: 15px;
    font-size: 14px;
    font-weight: 500;
    color:#8f9292;
}
#button3:hover {
    color:#6eb5ac;
}
#el-dropdown-link {
    cursor: pointer;
    color: #8f9292;
    font-size: 18px;
}
#el-dropdown-link:hover {
    color: #6eb5ac;
}
</style>