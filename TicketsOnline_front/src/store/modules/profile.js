import { User } from '@/utils/model.js'
import api from '@/api/index.js'

const state = {
    user: new User(),

}

const getters = {


}

const actions = {
    async getAuthority({commit, state}, form) {
        console.log('GetAuthority', form);
        const {token, id, name, emailAddress, phoneNumber, portrait, gender, organization, age} = await api.getAuthority(form)
        console.log(name, token)
        Object.assign(window.sessionStorage, {
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
        commit('setUser', {
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
        window.vm.$router.push({ name: 'Homepage'});
    }
}

const mutations = {
    setUser(state, props) {
        state.user = Object.assign({}, state.user, props)
        console.log('setUser', state.user)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}