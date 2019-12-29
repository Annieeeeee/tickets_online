<template>
<div class="component">
<el-card>
  <div class="card">
    <div style="flex: 0 0 auto"><img src="./../assets/img/demo1.png" style="height:88px; width:66px;"></div>
    <div>
      <div class="title">{{item.title}}</div>
      <div class="text">{{item.time}}</div>
      <div class="text">{{item.address}}</div>
    </div>
    <div>
      <div v-if="item.type === '0'">
        <el-button type="primary" plain> 取消预约 </el-button>
      </div>
      <div v-else>
        <el-button type="primary" disabled> 取消预约 </el-button>
      </div>
    </div>
  </div>
</el-card>
</div>
</template>

<script>
export default {
    name: 'MySingleActivity',
    data() {
        return {
            item: {
                imgUrl: '',
                id: '',
                title: '同舟讲坛|英国中世纪地图和诗歌中的海洋想象',
                time: '2019年11月11日 18:30~20:30',
                address: '逸夫楼二楼报告厅',
                type: '0',
            },
        }
    }
}
</script>

<style>
.component {
    margin:10px;
}
.card {
    display: flex;
    align-items:center;
    border-radius: 4px;  
}

.title {
    margin-left:10px;
    margin-bottom: 28px;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    width: 320px;
}

.text {
    margin-left:10px;
    margin-bottom: 8px;
    font-size: 12px;
    color:lightslategrey;
    text-align: left;
}

.el-card__body {
    padding:12px;
}
</style>