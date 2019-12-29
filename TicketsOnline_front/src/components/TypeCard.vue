<template>
      <el-card id="component">
          <div id="title">{{title}}</div>
          <div id="content"> 
            <div id="content1">   
              <div v-for="(item, index) in items" :key="index">
                <div  v-if="index === 0">
                  <img src="./../assets/img/demo1.png" style="height:230px;">
                  <div id="activity-title1">{{item.title}}</div>
                  <div id="text1">{{item.time}}</div>
                  <div id="text1">{{item.address}}</div>
                </div>
              </div>
            </div>
            <div id="content2">
              <div v-for="(item, index) in items" :key="index">
                <div v-if="index === 0"></div>
                <div v-else id="small">
                  <img src="./../assets/img/demo2.png" style="height:90px;">
                  <div id="activity-title2">{{item.title}}</div>
                  <div id="text2">{{item.time}}</div>
                </div>
              </div>
          </div>
          </div>
      </el-card>
</template>

<script>
export default {
    name: "TypeCard",
    data() {
        return {
            title: '最新',
            item: {
                imgUrl: '',
                id: '',
                title: '',
                time: '',
                address: ''
            },
            items: [{
                   imgUrl: '',
                   id: '',
                   title: '同舟讲坛|英国中世纪地图和诗歌中的海洋想象',
                   time: '2019年11月11日 18:30~20:30',
                   address: '逸夫楼二楼报告厅'
                },{
                   imgUrl: '',
                   id: '',
                   title: '同舟讲坛|当动画遇上“最炫民族风”',
                   time: '2019年12月12日 18:30~20:30',
                   address: '同济大学德文图书馆二楼报告厅' 
                },{
                   imgUrl: '',
                   id: '',
                   title: '同舟讲坛|当动画遇上“最炫民族风”',
                   time: '2019年12月12日 18:30~20:30',
                   address: '同济大学德文图书馆二楼报告厅' 
                }
            ],
        }
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
    margin-left: 40px;
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