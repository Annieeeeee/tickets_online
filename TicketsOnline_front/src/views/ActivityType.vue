<template>
  <div>
    <Navigator></Navigator>
    <div id="component">
    <el-carousel height="300px" :autoplay="false" id="box">
      <el-carousel-item>
        <div><img src="./../assets/img/first1.png" style="height:300px;width:100%;"></div>
      </el-carousel-item>
    </el-carousel>
    <el-card id="card">
      <div id="title">{{type}}</div>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
    </el-card>
    </div>
    

  </div>
</template>

<script>
import Navigator from "../components/Navigator"
import ActivityItem from "../components/ActivityItem"

export default {
    name:'ActivityType',
    components: {
        Navigator,
        ActivityItem,
    },
    data () {
        return {
            type:'最新',
        }
    }
}
</script>

<style scoped>
#box {
    margin-left: 30px;
    margin-right: 30px;
}

#component {
    display: flex;
    flex-direction: column;
}

#card {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
}

#title {
    font-size: 20px;
    font-weight: 600;
    color: #6eb5ac;
    text-align: left;
    margin-bottom: 10px;
    padding-left: 4px;
}
</style>

<style>
.el-card__body {
    padding: 12px;
}
</style>