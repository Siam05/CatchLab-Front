import axios from 'axios';
import V1API from '../../../../api-path/api-path';

const state = {
    categories: [],
    projects: [],
    projects_by_category: []
}

const getters = {}

const mutations = {
    SET_CATEGORIES (state, items) {
        state.categories = items
    },

    SET_PROJECTS (state, items) {
        state.projects = items
    },

    SET_PROJECTS_BY_CATEGORY (state, items) {
        state.projects_by_category = items
    },
}

const actions = {
    getCategories ({ commit }) {
        axios.get(V1API.get_categories).then(result => {
            let items = result.data.data
            commit('SET_CATEGORIES', items)
        })
    },

    getProjects ({ commit }) {
        axios.get(V1API.get_projects).then(result => {
            let items = result.data.data
            commit('SET_PROJECTS', items)
        })
    },

    getProjectsByCategory ({ commit }, payload) {
        axios.get(V1API.get_projects_by_category + payload).then(result => {
            let items = result.data.data
            commit('SET_PROJECTS_BY_CATEGORY', items)
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