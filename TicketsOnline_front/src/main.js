// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from 'axios'
import store from "./store"
import ElementUI from 'element-ui'
import './assets/element-variable.scss'

Vue.config.productionTip = false

Vue.prototype.$axios = http
Vue.use(ElementUI)

const {
  token,
  name,
  portrait,
  id,
  emailAddress,
  phoneNumber,
  gender,
  organization,
  age
} = window.localStorage
store.commit('profile/setUser', {
  token,
  name,
  portrait,
  id,
  emailAddress,
  phoneNumber,
  gender,
  organization,
  age
})

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
