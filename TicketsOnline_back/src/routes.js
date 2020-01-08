import Login from './views/Login.vue'
import Apply from './views/Apply.vue'
import Submit from './views/submitApp.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Draft from './views/nav1/Draft.vue'
import Check from './views/nav1/Check.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import postedActivity from './views/nav1/postedActivity.vue'
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/apply',
        component: Apply,
        name: '',
        hidden: true
    },
    {
        path: '/submit',
        component: Submit,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/normalAdmin',
        component: Home,
        name: '活动管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/normalAdmin/main', component: Main, name: '主页', hidden: true },
            { path: '/normalAdmin/postedActivity', component: postedActivity, name: '已发布' },
            { path: '/normalAdmin/checkingActivity', component: Check, name: '审核中' },
            { path: '/normalAdmin/draftActivity', component: Draft, name: '草稿' },
        ]
    },
    {
        path: '/normalAdmin',
        component: Home,
        name: '',
        iconCls: 'fa fa-id-card-o',
        leaf:true,
        children: [
            { path: '/normalAdmin/info', component: Form, name: '个人信息' }
        ]
    },
    {
        path: '/normalAdmin',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/normalAdmin/analysis', component: echarts, name: '活动分析' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;