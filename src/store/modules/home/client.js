import axios from 'axios';
import V1API from '../../../../api-path/api-path';

const state = {
    clients: [],
}

const getters = {}

const mutations = {
    SET_CLIENTS (state, items) {
        state.clients = items
    }
}

const actions = {
    getClients ({ commit }) {
        axios.get(V1API.get_client).then(result => {
            let items = result.data.data
            commit('SET_CLIENTS', items)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}