// profile.js

import axios from 'axios'
import DRF from '@/api/drf'

const state = {
  userInfo: [],
  wishMovies: [],
  myReviews: [],
  otherReviews: [],
}

const getters = {
  userInfo(state) {
    return state.userInfo
  },
  wishMovies(state) {
    return state.wishMovies
  },
  myReviews(state) {
    return state.myReviews
  },
  otherReviews(state) {
    return state.otherReviews
  }
}

const mutations= {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
  },
  SET_WISH_MOVIES(state, wishMovies) {
    state.wishMovies = wishMovies
  },
  SET_MY_REVIEWS(state, myReviews) {
    state.myReviews = myReviews
  },
  SET_OTHER_REVIEWS(state, otherReviews) {
    state.otherReviews = otherReviews
  }
}

const actions = {
  fetchUserInfo({ commit }, username) {
    axios.get(DRF.URL + DRF.ROUTES.profile(username))
      .then(res => commit('SET_USER_INFO', res.data))
      .catch(err => console.error(err))
  },
  fetchWishMovies({ commit, getters }) {
    axios.get(DRF.URL + DRF.ROUTES.wish_movies(), getters.config)
      .then(res => commit('SET_WISH_MOVIES', res.data))
      .catch(err => console.error(err))
  },
  fetchMyReviews({ commit , getters }) {
    axios.get(DRF.URL + DRF.ROUTES.my_reviews(), getters.config)
      .then(res => commit('SET_MY_REVIEWS', res.data))
      .catch(err => console.error(err))
  },
  fetchOtherReviews({ commit }, username) {
    axios.get(DRF.URL + DRF.ROUTES.other_reviews(username))
      .then(res => commit('SET_OTHER_REVIEWS', res.data))
      .catch(err => console.error(err))
  }
}

export default {
  state, getters, mutations, actions
}