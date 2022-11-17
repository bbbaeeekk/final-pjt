import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/movies/HomeView'
import MovieView from '@/views/movies/MovieView'
import ArticleView from '@/views/movies/ArticleView'
import LoginView from '@/views/accounts/LoginView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/movie',
    name: 'MovieView',
    component: MovieView
  },
  {
    path: '/article',
    name: 'ArticleView',
    component: ArticleView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
