<template>
  <div id="box1">
    <div><el-avatar icon="el-icon-user-solid" :size="34"></el-avatar></div>
    <div id="box2">
      <div id="username">{{item.username}}</div>
      <div>{{item.content}}</div>
    </div>
  </div>
</template>

<script>

export default {
    name:"DiscussionItem",
    data() {
        return {
            item: {
                imgUrl:'',
                username:'zss',
                content:'嘉宾对于国漫的看法xxxxxx',
                type:'',
            }
        }
    }
}
</script>

<style scoped>
#box1 {
    display: flex;
    margin-bottom: 26px;
}

#box2 {
    display:flex;
    flex-direction: column;
    justify-content: left;
    margin-left: 10px;
}

#username {
    text-align: left;
    font-size: 16px;
    color: #8f9292;
    margin-bottom:2px;
}
</style>