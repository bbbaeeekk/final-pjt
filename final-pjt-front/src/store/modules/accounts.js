import cookies from 'vue-cookies'
import axios from 'axios'
import DRF from '@/api/drf'
import router from '@/router'
// import { config } from 'vue/types/umd'

const state = {
  authToken : cookies.get('auth-token'),
  username: cookies.get('auth-username'),
  otherUser: {},
  newsfeedData: {},
}

const getters = {
  isLoggedIn: state => !!state.authToken,
  config: state => {
    return {
        headers: {
          Authorization: `Token ${state.authToken}`
        }
    }
  },
  getUsername: state => state.username,
  getOtherUser: state => state.otherUser,
  getNewsFeedData: state => state.newsfeedData
}

const mutations= {
  SET_TOKEN(state, token) {
    state.authToken = token
  },
  SET_USERNAME(state, username) {
    state.username = username
  },
  SET_OTHERUSER(state, otherUser) {
    state.otherUser = otherUser
  },
  SET_NEWSFEED_DATA(state, newsfeedData) {
    state.newsfeedData = newsfeedData
  }
}

const actions = {
  postAuthData({ commit, dispatch }, info) {
    axios.post(DRF.URL + info.path, info.data)
      .then(res => {
        commit('SET_USERNAME', info.data.username)
        commit('SET_TOKEN', res.data.key)
        // 쿠키에 바로 셋팅이 됨
        cookies.set('auth-token', res.data.key, '2d')
        cookies.set('auth-username', info.data.username, '2d')
        // redirect => /articles
        router.push({ name: 'MovieView' })
        dispatch('fetchUserInfo', info.data.username)
      })
      .catch(err => {
        console.error(err.response.data)
        alert(
          err.response.data.username 
          || err.response.data.password 
          || err.response.data.password1 
          || err.response.data.password2
          || err.response.data.non_field_errors
          )
      })
  },
  fetchOtherUserData({ commit }, username) {
    axios.get(DRF.URL + DRF.ROUTES.profile(username))
      .then(res => commit('SET_OTHERUSER', res.data))
  },
  followOtherUser({ getters, dispatch }, username) {
    axios.post(DRF.URL + DRF.ROUTES.follow(username), null, getters.config)
      .then(() => dispatch('fetchOtherUserData', username))
      .catch(err => console.error(err))
  },
  fetchNewsFeedData({ getters, commit }) {
    axios.get(DRF.URL + DRF.ROUTES.newsfeed(), getters.config)
      .then(res => commit('SET_NEWSFEED_DATA', res.data))
      .catch(err => console.error(err))
  },

  // 추천받는 로직 만들기

  signup({ dispatch }, signupData) {
    const info = {
      data: signupData,
      path: DRF.ROUTES.signup()
    }
    dispatch('postAuthData', info)
  },
  
  login({ dispatch }, loginData) {
    const info = {
      data: loginData,
      path: DRF.ROUTES.login()
    }
    dispatch('postAuthData', info)
  },
  
  logout({ getters, commit }) {
    const FULL_URL_PATH = DRF.URL + DRF.ROUTES.logout()
    axios.post(FULL_URL_PATH, null, getters.config)
      // Django DB테이블에서는 삭제 | Cookie, state에서는 존재
      .then(() => {
        cookies.remove('auth-token')  // Cookie삭제 |state에서는 존재
        commit('SET_TOKEN', null)  // state 에서도 삭제
        // console.log('dffd')
        router.push({ name: 'HomeView' }) 
      })
      .catch(err => console.error(err.response.data))
  },
}

export default {
  state, getters, mutations, actions
}