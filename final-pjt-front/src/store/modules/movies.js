import axios from 'axios'
import DRF from '@/api/drf'
// import Vue from 'vue'
// import Vuex from 'vuex'


const state = {
    MovieDatas:[],
}

const getters = {
    movies(state) {
        return state.MovieDatas
    }
}

const mutations = {
    GET_MOVIES(state, movieDatas) {
        state.MovieDatas = movieDatas
    }
}

const actions = {
    getMovies({ commit }) {
        axios.get(DRF.URL + DRF.ROUTES.get_movie_list())
        .then(res => commit('GET_MOVIES', res.data))
        .catch(err => console.error(err))
      }
}

export default {
    state, getters, mutations, actions
}