import Vue from 'vue'
import Vuex from 'vuex'
import movies from '@/store/modules/movies'
import random_movie from '@/store/modules/random_movie'
import articles from '@/store/modules/articles'
import accounts from '@/store/modules/accounts'
// import profile from '@/store/modules/profile'

// import accounts from './modules/accounts.js'
// import profile from './modules/profile.js'
// import newsfeed from './modules/newsfeed.js'
// import errors from './modules/errors.js'
// import reviews from './modules/reviews.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    accounts,
    // profile, 
    movies,
    random_movie,
    articles,
    // newsfeed,
    // errors,    
    // reviews,
  }
})