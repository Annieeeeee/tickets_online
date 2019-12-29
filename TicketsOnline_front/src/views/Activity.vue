<template>
  <div id="container">
    <Navigator></Navigator>
    <el-card style="margin-top:10px; margin-bottom:10px;">
    <div id="box1">
        <div><img src="./../assets/img/demo2.png" style="height:300px; width:200px;"></div>
        <div id="box11">
          <div id="title">{{item.title}}</div>
          <span id="label">时间：</span>
          <div id="text">{{item.time}}</div>
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
      <div id="words">{{item.description}}</div>
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
    </el-card>
  </div>
</template>

<script>
import Navigator from "../components/Navigator"
import Discussion from "../components/Discussion"

export default {
    name: 'Activity',
    components: {
        Navigator,
        Discussion,
    },
    data () {
        return {
            item: {
                imgUrl:'',
                title:'同舟讲坛|当动画遇上最炫民族风',
                sponsor:'彭擎政',
                time:'2019/12/12 18:30-20:30',
                address:'同济大学德文图书馆二楼报告厅',
                description:'愿引中国风，独做痴漫郎',
                content:'院线的热映，官微的推介，“国产动画崛起！”的口号，在优质动画上映的暑期档,此番景象似乎已成寻常.然而，单部动画带来的市场热潮往往难以持久，短暂的红火之后是漫长的深秋，冷热交替，缺少持续热度的国产动画市场，将要走向何方?我们期待在观看国产动画时，能窥见那些我们读过的书，吟过的诗，听过的历史的影子。中国风不只是青砖黛瓦，而是可以自信地截取历史长河中的任何片段.青年导演彭擎政，便是这样一位国产动画制作人，他是生活中的酷guy，p图，闭气无所不能；他也是事业上的酷guy，坚定着自己对于传统文化的热忱，他将中国风融入国产动画，凭借《中国唱诗班》《京剧猫》等作品圈粉无数，他让观众们在泛起涟漪的镜湖上，喜气洋洋的元日里，动荡不安的近代岁月中，感受中国传统文化的温度和力量。我们一起见证国产动画的潮起潮落，变化的是时代，不变的是我们最初的热爱，是我们一直以来的陪伴，是我们时刻仰望星空，满怀期待的姿态。十二月十二日，我们邀请每一个“仰望国产动画星空”的你，来与彭擎政导演对话，听听他心中的中国风和国产动画，我们在同舟讲坛，不见不散。',
                peopleAmount: 100,
            },
            percentage: 20,
            customColor: '#6eb5ac',
            peopleAppointed: 20,
            appointedStatus: true,
        }
    },
    methods: {
        format(percentage) {
            return percentage === 100 ? '预约已满' : `${this.peopleAppointed}/${this.item.peopleAmount}`;
      }
    }
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