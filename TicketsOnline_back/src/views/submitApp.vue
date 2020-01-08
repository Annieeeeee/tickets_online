<template>
<div>
  <div id="fixed" >
    <img src='../assets/image/normal_bg.png' style="width:100vw;height:calc(100vh);">
  </div>
  <el-form :model="applyForm":rules="applyRule" ref="applyForm" label-width="80px" class="demo-ruleForm submit-container">
    <h2 class="title">提交信息</h2>
    <el-form-item label="申请理由">
			<el-input type="textarea" v-model="applyForm.reason"></el-input>
		</el-form-item>
    <el-form-item>
        <el-button type="primary" @click="handleSubmit">提交理由</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
          applyForm:{
            reason:'',//。
          },
          applyRule:{
              reason: [
                { required: true, message: '请输入申请理由', trigger: 'blur' },
             ],
          },

          
      };
    },
    methods: {
      //提交申请原因
      handleSubmit(){

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

  .submit-container {
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