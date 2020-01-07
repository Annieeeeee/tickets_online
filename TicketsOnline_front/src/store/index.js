import Vue from 'vue'
import Vuex from 'vuex'
import activity from './modules/activity.js'
import profile from './modules/profile.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        activity,
        profile,
    },
    strict: debug
})