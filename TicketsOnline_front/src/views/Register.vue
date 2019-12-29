<template>
<div id = "container">
  <el-card id="card"> 
    <div id="title"> Tickets Online 用户注册</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" placeholder="请再次输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="ruleForm.gender" style="float:left; margin-top:12px;">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄">
          <el-input v-model="ruleForm.age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item label="组织">
          <el-select v-model="ruleForm.organization" placeholder="请选择组织" style="float:left;">
            <el-option label="在校学生" value="student"></el-option>
            <el-option label="社会人士" value="other"></el-option>
          </el-select>
      </el-form-item>

      <el-form-item label="上传头像" prop="avatar">

      </el-form-item>
      <div class="btns">
        <el-button type="primary" @click="onSubmit('form')" style="flex: 1 1 auto">注册</el-button>
        <el-button @click="onCancle()" style="flex: 2 1 auto">已注册？去登录</el-button>
      </div>
</el-form>
</el-card>
</div>
</template>

<script>

export default {
    name: "Register",
    components: {
  
    },
    data() {
      var validateEmail = (rule, value, callback) => {
        if (value == '') {
            callback(new Error("请输入邮箱"));
        } else {
            callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === "") {
            callback(new Error("密码不可为空"));
        } else {
            if (this.form.checkPass !== "") {
                this,$refs.form.validateField("checkPass");
            }
            callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === "") {
            callback(new Error("请再次输入密码"));
        } else if (value !== this.form.pass) {
            callback(new Error("两次输入的密码不一致"));
        } else {
            callback();
        }
      };
      var validatePhone = (rule, value, callback) => {
        if (value === "") {
            callback(new Error("手机号不可为空"));
        } else {
            callback();
      }
    };
      return {
        ruleForm: {
          username: "",
          pass: "",
          checkPass: "",
          email: "",
          phone: "",
          avator: "",
          gender: "",
          age:"",
          organization:"",
        },
        rules: {
          username: [
            { required: true, message: '用户名不可为空', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          pass: [{ required: true, validator: validatePass, trigger: "blur" }],
          checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
          ],
          email: [{ required: true, validator: validateEmail, trigger:"blur"}],
          phone: [{ required: true, validator: validatePhone, trigger: "blur" }],
          gender: [{ required: true, message: "请选择性别", trigger: 'change' }],
        }
      };
    },
    methods: {
        onSubmit(formName) {
            console.log(this.form);

        },

        onCancle() {
            this.$router.push({ name: "Login" });
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
    padding-left:40px;
    font-size:22px;
    font-weight: 600;
    color: #6eb5ac;
    text-align: center;
}

</style>

<style>
.el-form-item__label {
    font-size: 16px;
    color: #6eb5ac;
    padding-right:12px;
} 
.el-form-item {
    margin-bottom: 30px;
}
.el-form-item__error {
    font-size: 14px;
    margin-top:1px;
}
</style>