<template>
<div style="margin-top: 20px;">
    <DiscussionItem></DiscussionItem>
    <DiscussionItem></DiscussionItem>
    <DiscussionItem></DiscussionItem>
    <div id="add">
        <el-input v-model="comment" placeholder="在这里留下你的想法吧" style="width: 600px;"></el-input>
        <div><el-button type="primary" plain style="margin-right: 40px;">提交留言</el-button></div>
    </div>
</div>
</template>

<script>
import DiscussionItem from "../components/DiscussionItem"

export default {
    name:"Discussion",
    components: {
        DiscussionItem,
    },
    data() {
        return {
            comment:'',
        }
    }
}
</script>

<style scoped>
#add {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
}
</style>