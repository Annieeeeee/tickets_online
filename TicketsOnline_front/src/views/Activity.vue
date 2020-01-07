<template>
  <div id="container">
    <Navigator></Navigator>
    <el-card style="margin-top:10px; margin-bottom:10px;">
    <div v-if="item">
    <div id="box1">
        <div><img :src="item.poster" style="height:300px; width:200px;"></div>
        <div id="box11">
          <div id="title">{{item.name}}</div>
          <span id="label">时间：</span>
          <div id="text">{{item.time_start}} ~ {{item.time_end}}</div>
          <span id="label">地点：</span>
          <div id="text">{{item.address}}</div>
          <span id="label">主讲人：</span>
          <div id="text">{{item.sponsor}}</div>
          <div>
            <el-steps :space="200" :active="1" finish-status="success" id="step">
              <el-step title="未开始"></el-step>
              <el-step title="预约中"></el-step>
              <el-step title="进行中"></el-step>
              <el-step title="已结束"></el-step>
            </el-steps>
          </div>
        </div>
    </div>
    <div id="box2">
      <span id="label">描述：</span>
      <div id="words">{{item.introduction}}</div>
      <br/>
      <span id="label">内容：</span>
      <div id="words">{{item.content}}</div>
      <br/>
      <span id="label">预约：</span>
       <div id="appointed">
        <el-progress :percentage="percentage" :color="customColor" :format="format" style="width:500px;"></el-progress>
        <div v-if="appointedStatus">
          <el-button type="primary" plain style="margin-right: 20px;">取消预约</el-button>
        </div>
        <div v-else>
          <el-button type="primary" plain style="margin-right: 20px;">预约活动</el-button>
        </div>
      </div>
    </div>
    <div id="discussion">
        <div id="label">精选留言:</div>
        <Discussion></Discussion>
    </div>
    </div>
    </el-card>
  </div>
</template>

<script>
import Navigator from "../components/Navigator"
import Discussion from "../components/Discussion"
import axios from 'axios'

export default {
    name: 'Activity',
    components: {
        Navigator,
        Discussion,
    },
    data () {
        return {
            item:'',
            activityId:'',
            percentage: 20,
            customColor: '#6eb5ac',
            peopleAppointed: 20,
            appointedStatus: true,
        }
    },
    methods: {
        format(percentage) {
            return percentage === 100 ? '预约已满' : `${this.peopleAppointed}/${this.item.peopleAmount}`;
        },
        
    },
    computed: {

    },
    created() {
       var self=this
       this.activityId = this.$route.params.activityId
       console.log(this.activityId)
       axios.get('http://119.3.187.81:8181/user-service/api/activities/'+this.activityId)
            .then(response => (self.item = response.data))
       console.log(self.item)
    },
    
}
</script>

<style scoped>
#box1 {
    display:flex;
    width: 800px;
    padding-left: 20px;
}

#box2 {
    display:flex;
    flex-direction: column;
    width: 800px;
    padding-left: 20px;
    margin-top: 20px;
    margin-right: 20px;
}

#discussion {
    display:flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
}

#box11 {
    display:flex;
    flex-direction: column;
    margin-left: 30px;
    text-align: left;
}

#title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #6eb5ac;
}

#label {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 6px;
    text-align: left;
    color: #6eb5ac;
}

#text {
    font-size: 18px;
    margin-bottom: 6px;
    text-align: left;
    margin-left: 16px;
}

#words {
    font-size: 16px;
    margin-bottom: 4px;
    text-align: left;
}

#container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('~@/../src/assets/img/normal_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

#step {
    margin-top: 30px;
    width: 600px;
}

#appointed {
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
}
</style>

<style>
.el-step__head.is-success {
    color: #eb8a8e;
    border-color: #eb8a8e;
}
.el-step__title.is-success {
    color:#eb8a8e;
}
.el-step__head.is-process {
    color: #6eb5ac;
    border-color: #6eb5ac;
}
.el-step__title.is-process {
    color:#6eb5ac;
}
.el-progress__text {
    color: #6eb5ac
}
</style>