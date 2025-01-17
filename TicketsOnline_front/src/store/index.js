import Vue from 'vue'
import Vuex from 'vuex'
import activity from './modules/activity.js'
import { debug } from 'webpack'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        activity,
    },
    strict: debug
})