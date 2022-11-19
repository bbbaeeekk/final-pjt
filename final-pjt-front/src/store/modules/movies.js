import axios from 'axios'
import DRF from '@/api/drf'


const state = {
    MovieDatas:[],
    movieDetail: [],
}

const getters = {
    movies(state) {
        return state.MovieDatas
    },
    movieDetail(state) {
        return state.movieDetail
    },
}

const mutations = {
    GET_MOVIES(state, movieDatas) {
        state.MovieDatas = movieDatas
    },
    GET_MOVIE_DETAIL(state, movieDetail) {
        state.movieDetail = movieDetail
        // state.movieDetailReviews = movieDetail.reviews
        // state.reviews = movieDetail.reviews
    },
}

const actions = {
    getMovies({ commit }) {
        axios.get(DRF.URL + DRF.ROUTES.get_movie_list())
        .then(res => commit('GET_MOVIES', res.data))
        .catch(err => console.error(err))
    },
    getMovieDetail({ commit }, movie_pk) {
        axios.get(DRF.URL + DRF.ROUTES.get_movie_detail(movie_pk))
          .then(res => commit('GET_MOVIE_DETAIL', res.data))
          .catch(err => console.error(err))
    },
}

export default {
    state, getters, mutations, actions
}