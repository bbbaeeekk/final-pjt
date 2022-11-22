import axios from 'axios'
import djangourl from '@/urls/djangourl'


const state = {
    MovieDatas:[],
    movieDetail: [],
    genre_movies: [],
}

const getters = {
    movies(state) {
        return state.MovieDatas
    },
    movieDetail(state) {
        return state.movieDetail
    },
    genre_movies(state) {
        return state.genre_movies
    }
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
    GENRE_MOVIE(state, genre_movies) {
        console.log(genre_movies)
        state.genre_movies = genre_movies
    }
}

const actions = {
    getMovies({ commit }) {
        axios.get(djangourl.URL + djangourl.ROUTES.get_movie_list())
        .then(res => commit('GET_MOVIES', res.data))
        .catch(err => console.error(err))
    },
    getMovieDetail({ commit }, movie_pk) {
        axios.get(djangourl.URL + djangourl.ROUTES.get_movie_detail(movie_pk))
          .then(res => commit('GET_MOVIE_DETAIL', res.data))
          .catch(err => console.error(err))
    },
    genre_movie({commit}, genre_movies) {
        commit('GENRE_MOVIE', genre_movies)
    },
}

export default {
    state, getters, mutations, actions
}