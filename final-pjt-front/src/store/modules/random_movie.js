import axios from 'axios'
import DRF from '@/api/drf'


const state = {
    random_movie:[],
}

const getters = {
    random_movies(state) {
        return state.random_movie
    }
}

const mutations = {
    RANDOM_MOVIES(state, random_movie) {
        state.random_movie = random_movie
    }
}

const actions = {
    random_Movies({ commit }) {
        console.log('hi')
        axios.get(DRF.URL + DRF.ROUTES.get_movie_list())
        .then(res => commit('RANDOM_MOVIES', res.data))
        .catch(err => console.error(err))
      }
}

export default {
    state, getters, mutations, actions
}