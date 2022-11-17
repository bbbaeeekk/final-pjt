import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MovieDatas:null,
  },
  getters: {
  },
  mutations: {
    GETMOVIES(state, movieDatas) {
      state.MovieDatas = movieDatas
      // console.log(state.MovieDatas)
    }
  },
  actions: {
    getMovies(context) {
      const API_URL = 'http://127.0.0.1:8000'

      axios({
        method:'get',
        url: `${API_URL}/api/v1`,
      })
      .then((res) => {
        context.commit('GETMOVIES', res.data)
        // console.log(res.data)
        // console.log(context)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
