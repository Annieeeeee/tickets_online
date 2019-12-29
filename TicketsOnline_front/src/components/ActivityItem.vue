<template>
  <div id="component">
    <el-card>
      <div id="card">
        <div style="flex:0 0 auto"><img src="./../assets/img/demo2.png" style="height:150xpx; width:100px;"></div>
        <div id="message">
          <div id="title">{{item.title}}</div>
          <div id="text">时间：{{item.time}}</div>
          <div id="text">地点：{{item.address}}</div>
          <div id="text">主讲人：{{item.sponsor}}</div>
          <div id="text">描述：{{item.description}}</div>
        </div>
        <el-button type="primary" plain id="button">查看详情</el-button>
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
    name: 'ActivityItem',
    data() {
        return {
            item: {
                imgUrl:'',
                title:'同舟讲坛|当动画遇上最炫民族风',
                sponsor:'彭擎政',
                time:'2019/12/12 18:30-20:30',
                address:'同济大学德文图书馆二楼报告厅',
                description:'愿引中国风，独做痴漫郎',
            }
        }
    }
}
</script>

<style scoped>
#component {
    margin-left: 10px;
    margin-right: 10px; 
    margin-bottom: 10px;
}

#card {
    display: flex;
    align-items:center;
    border-radius: 4px; 
}

#title {
    margin-left:20px;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    width: 320px;
}

#text {
    margin-left:20px;
    margin-bottom: 10px;
    font-size: 14px;
    color:lightslategrey;
    text-align: left;
}

#message {
    display: flex;
    flex-direction: column;
}

#button {
    margin-left: 580px;
}
</style>

<style>
.el-card__body {
    padding: 12px;
}
</style>