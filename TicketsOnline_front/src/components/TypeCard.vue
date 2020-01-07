<template>
      <el-card id="component">
          <div id="title">{{title}}</div>
          <div id="content"> 
            <div id="content1" v-if="items">   
              <div v-for="(item, index) in items" :key="index">
                <div  v-if="index === 0">
                  <img :src="item.poster" style="height:230px; width: 160px">
                  <div><el-button type="text" id="activity-title1"
                             @click="$router.push({name:'Activity', params: {activityId: item.id}})"
                             >{{item.name}}</el-button></div>
                  <div id="text1">{{item.time_start}}</div>
                  <div id="text1">{{item.time_end}}</div>
                  <div id="text1">{{item.address}}</div>
                </div>
              </div>
            </div>
            <div id="content2">
              <div v-for="(item, index) in items" :key="index">
                <div v-if="index === 0"></div>
                <div v-else id="small">
                  <img :src="item.poster" style="height:90px; width:60px;">
                  <div><el-button type="text" id="activity-title2"
                          @click="$router.push({name:'Activity', params: {activityId: item.id}})"
                             >{{item.name}}</el-button></div>
                  <div id="text2">{{item.time_start}}</div>
                  <div id="text2">{{item.time_end}}</div>
                </div>
              </div>
          </div>
          </div>
      </el-card>
</template>

<script>
import axios from 'axios'

export default {
    name: "TypeCard",
    props: [
        'title',
    ],
    data() {
        return {
            items:'',
        }
    },
    created() {
        var self=this
        console.log(this.title)
        axios.get('http://119.3.187.81:8181/user-service/api/activities/basic?limit=3&variety='+this.title)
             .then(response => (self.items = response.data))
        console.log(self.items)
    }
}
</script>

<style scoped>
#component {
    margin-left: 30px;
    margin-top:15px;
    display: flex;
    width: 585px;
}
#title {
    font-size: 22px;
    font-weight:500;
    float: left;
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 20px;
    color: #6eb5ac;
}
#content {
    display: flex;
    margin-top: 50px;
    padding-bottom: 8px;
}
#content1 {
    width: 260px;
    margin-left: 20px;
}
#activity-title1 {
    margin-top: 6px;
    margin-bottom: 4px;
    font-size: 15px;
    font-weight: 600;
}
#text1 {
    font-size: 13px;
}
#content2 {
    display: flex;
    flex-direction: column;
    width: 190px;
    margin-left: 30px;
}
#activity-title2 {
    margin-top: 4px;
    margin-bottom: 2px;
    font-size: 13px;
    font-weight: 600;
}
#text2 {
    font-size: 11px;
}

#small {
    margin-bottom: 14px;
}
</style>

<style>
.el-button--text {
    color:black;
}
.el-button--text:hover {
    color: #6eb5ac;
}
</style>