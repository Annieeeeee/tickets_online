import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../views/Homepage'
import Login from '../views/Login'
import Register from '../views/Register'
import MyActivity from '../views/MyActivity'
import MyAccount from '../views/MyAccount'
import ActivityType from '../views/ActivityType'
import Activity from '../views/Activity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/myactivity',
      name: 'MyActivity',
      component: MyActivity
    },
    {
      path: '/myaccount',
      name: 'MyAccount',
      component: MyAccount
    },
    {
      path: '/activitytype',
      name: 'ActivityType',
      component: ActivityType
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    }
  ]
})
