<template>
<div>
    <Navigator></Navigator>
    <div id = "container">
      <el-card id="card"> 
          <div id="title"> Tickets Online 账号设置</div>
          <div><el-avatar icon="el-icon-user-solid" :size="100" style="margin-bottom:10px;"></el-avatar></div>
          <div id="line">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
              <span id="content">{{user.name}}</span>
            </el-form-item>
            <el-form-item label="邮箱">
              <span id="content">{{user.email}}</span>
            </el-form-item>
            <el-form-item label="电话">
              <span id="content">{{user.phone}}</span>
            </el-form-item>
            <el-form-item label="性别">
              <span id="content">{{user.gender}}</span>
            </el-form-item>
            <el-form-item label="组织">
              <span id="content">{{user.organization}}</span>
            </el-form-item>
            <el-form-item label="年龄">
              <span id="content">{{user.age}}</span>
            </el-form-item>
        </el-form>
        </div>
        <div>
            <el-button type="primary" plain>编辑资料</el-button>
        </div>
      </el-card>
    </div>
</div>
</template>

<script>
import Navigator from '../components/Navigator'

export default {
    name: 'MyAccount',
    components: {
        Navigator,
    },
    data() {
        return {
            user: {
                imgUrl:'',
                name:'tickets',
                email:'ticketsonline@163.com',
                phone:'18019060027',
                gender:'女',
                organization:'在校学生',
                age:'19',
            }
        }
    }
}
</script>

<style scoped>
#container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('~@/../src/assets/img/normal_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

#card {
    margin-top:10px;
    margin-bottom:20px;
    width: 600px;
}

#title {
    margin-bottom: 20px;
    padding-left: 20px;
    font-size:22px;
    font-weight: 600;
    color: #6eb5ac;
    text-align: center;
}

#line {
    display: flex;
    align-items: center;
    margin-left: 170px;
}

#content {
    float: left;
    margin-left: 10px;
    font-size: 16px;
}

</style>

<style>
.el-form-item__label {
    font-size: 16px;
    color: #6eb5ac;
    padding-right:12px;
} 
</style>