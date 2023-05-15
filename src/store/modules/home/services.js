import axios from 'axios';
import V1API from '../../../../api-path/api-path';

const state = {
    services: [],
}

const getters = {}

const mutations = {
    SET_SERVICES_LIST (state, items) {
        state.services = items
    },
}

const actions = {
    getServicesList ({ commit }) {
        axios.get(V1API.get_services_list).then(result => {
            let items = result.data.data
            console.log(items)
            commit('SET_SERVICES_LIST', items)
        })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}