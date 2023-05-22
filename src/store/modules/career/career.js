import axios from 'axios';
import V1API from '../../../../api-path/api-path';
import {populateStore, performNetworkCall, buildFormData} from "../../asyncHelper";

const state = {
    jobs: [],
    jobDetails: {},
    application: {}
}

const getters = {}

const mutations = {
    SET_JOB_POST (state, items) {
        state.jobs = items
    },

    SET_JOB_DETAILS (state, items) {
        state.jobDetails = items
    },

    SET_APPLICATION (state, items) {
        state.application = items
    },
}

const actions = {
    getJobPost ({ commit }) {
        axios.get(V1API.get_job_post).then(result => {
            let items = result.data.data
            commit('SET_JOB_POST', items)
        })
    },

    getJobDetails ({ commit }, payload) {
        axios.get(V1API.get_job_post_details + payload).then(result => {
            let items = result.data.data
            console.log(items)
            commit('SET_JOB_DETAILS', items)
        })
    },

    async applyForJob ({ commit }, payload) {
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        let data = new FormData();
        let payloadData = buildFormData(data, payload);

        let response = await axios.post(V1API.create_job_application, payloadData, config).then(result => {
            let item = result.data
            commit('SET_APPLICATION', item)
            return result
        })
        return response
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}