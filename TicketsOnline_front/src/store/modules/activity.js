import api from '@/api/index.js'

const state = {
    activityItems:[],
    oneActivity:[],
}

const getters = {

}

const actions = {
    async getpartActivities({commit, state}, type) {
        const res = await api.getLimitActivities(type)
        commit('setLimitedActivities', res.data)
    },

    async getActivity({commit, state}, id) {
        const res = await api.getActivity(id)
        console.log('getActivityRes',res)
        commit('setActivity', res.data)
        console.log(state.oneActivity)
    }
}

const mutations = {
    setLimitedActivities(state, props) {
        state.activityItems.push(...props)
    },
    setActivity(state, props) {
        state.oneActivity.push(...props)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}