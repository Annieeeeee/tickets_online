<template>
<div>
  <Navigator></Navigator>
  <div class="board">
    <el-card style="margin-top:10px;">
      <div class="title1">我的活动</div>
      <div class="content">
        <el-tabs :tab-position="tabPosition" style="height: 300px; margin-top: 20px;">
          <el-tab-pane label="全部"></el-tab-pane>
          <el-tab-pane label="未开始"></el-tab-pane>
          <el-tab-pane label="进行中"></el-tab-pane>
          <el-tab-pane label="已结束"></el-tab-pane>
        </el-tabs>
        <div class="activities">
          <MySingleActivity></MySingleActivity>
          <MySingleActivity></MySingleActivity>
          <MySingleActivity></MySingleActivity>
          <MySingleActivity></MySingleActivity>
        </div>
      </div>
    </el-card>
  </div>
</div>
</template>

<script>
import Navigator from "../components/Navigator"
import MySingleActivity from "../components/MySingleActivity"

export default {
    name: "MyActivity",
    components: {
        Navigator,
        MySingleActivity,
    },
    data() {
        return {
            tabPosition: 'left'
        }
    }
}
</script>

<style scoped>
.title1 {
    margin-bottom: 20px;
    font-size:22px;
    font-weight: 600;
    color: #6eb5ac;
    text-align: center;
}
.board {
    display:flex;
    justify-content: center;
    align-content: center;
    background: url('~@/../src/assets/img/normal_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height: calc(100vh);
}

.content {
    display:flex;
}

.activities {
    display: flex;
    flex-direction: column;
}
</style>