import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import './assets/theme/theme-sodagreen/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import routes from './routes'
import Mock from './mock'
//Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'


axios.defaults.baseURL='http://119.3.187.81:8181/'
//axios.defaults.headers.post['Content-Type']='application/json;'
axios.defaults.headers.common['token']=store.state.token
Vue.config.productionTip=false

Vue.prototype.$ajax=axios;

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})
const store1={
  state:{
    token:sessionStorage.getItem('token')||'',
  },
}

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login'||to.path=='/apply'||to.path=='/submit') {
    sessionStorage.removeItem('token');
  }
  let user = JSON.parse(JSON.stringify(sessionStorage.getItem('user')));
  if (!user && (to.path != '/login'&&to.path!='/apply'&&to.path!='/submit')) {
    next({ path: '/login' })
  } else {
    next()
  }
});

axios.interceptors.request.use(function(config){
  if(store.state.token){
    config.headers.Authorization=`Bearer ${sessionStorage.getItem("token")}`
  }
  return config
}, function (error){
  router.push('/Login')
  return Promise.reject(error)
})
//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

