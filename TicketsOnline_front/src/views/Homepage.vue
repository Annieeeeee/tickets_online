<template>
  <div>
    <Navigator></Navigator>
    <div class="block">
      <el-carousel height="300px" :autoplay="false" id="box">
        <el-carousel-item>
            <div><img src="./../assets/img/first1.png" style="height:300px;width:100%;"></div>
        </el-carousel-item>
        <el-carousel-item>
            <div><img src="./../assets/img/first3.png" style="height:300px;width:100%;"></div>
        </el-carousel-item>
        <el-carousel-item>
            <div><img src="./../assets/img/first2.png" style="height:300px;width:100%;"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="types">
       <el-card shadow="never" id="type">
           <img src="./../assets/img/home1.png" style="height:60px;">
           <div><el-button type="text" id="button">讲座</el-button></div>
       </el-card>
       <el-card shadow="never" id="type">
           <img src="./../assets/img/home2.png" style="height:60px;">
           <div><el-button type="text" id="button">文娱</el-button></div>
       </el-card>
       <el-card shadow="never" id="type">
           <img src="./../assets/img/home3.png" style="height:60px;">
           <div><el-button type="text" id="button">体育</el-button></div>
       </el-card>
       <el-card shadow="never" id="type">
           <img src="./../assets/img/home4.png" style="height:60px;">
           <div><el-button type="text" id="button">展览</el-button></div>
       </el-card>
       <el-card shadow="never" id="type">
           <img src="./../assets/img/home5.png" style="height:60px;">
           <div><el-button type="text" id="button">社团</el-button></div>
       </el-card>
       <el-card shadow="never" id="type">
           <img src="./../assets/img/home6.png" style="height:60px;">
           <div><el-button type="text" id="button">竞赛</el-button></div>
       </el-card>
    </div>
    <div id="type-block">
      <TypeCard :title=typeTitle[0]></TypeCard>
      <TypeCard :title=typeTitle[1]></TypeCard>
      <TypeCard :title=typeTitle[2]></TypeCard>
      <TypeCard :title=typeTitle[3]></TypeCard>
      <TypeCard :title=typeTitle[4]></TypeCard>
      <TypeCard :title=typeTitle[5]></TypeCard>
      <TypeCard :title=typeTitle[6]></TypeCard>
      <TypeCard :title=typeTitle[7]></TypeCard>
    </div>
  </div>
</template>

<script>
import Navigator from "../components/Navigator"
import TypeCard from "../components/TypeCard"

export default {
    name: 'Homepage',
    components: {
        Navigator,
        TypeCard,
    },
    data () {
        return {
            typeTitle: [
                '最新',
                '最热',
                '讲座',
                '文娱',
                '体育',
                '展览',
                '社团',
                '竞赛',
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
#box {
    margin-left: 30px;
    margin-right: 30px;
}

#types {
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding-left:200px;
  padding-right: 200px;
  margin-left:30px;
  margin-right:30px;
  margin-top:8px;
  border-radius: 4px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
}

#type {
    flex:0 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:0px;
}

#id {
    padding: 0px;
}

#type-block {
    display: flex;
    flex-wrap: wrap;
}

#button:hover {
    color: #eb8a8e;
}
</style>

<style>
.el-card__body {
    padding: 0px;
}
.el-button {
    padding-top: 4px;
    padding-bottom: 10px;
}
</style>