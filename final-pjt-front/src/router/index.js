import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'

// Views
import HomeView from '@/views/HomeView'
import NotFound from '@/views/NotFound'

// accounts Views
import LoginView from '@/views/accounts/LoginView'
import SignupView from '@/views/accounts/SignupView'

// movies Views
import MovieView from '@/views/movies/MovieView'
// import ArticleView from '@/views/movies/ArticleView'
import RandomView from '@/views/movies/RandomView'
import MovieDetailView from '@/views/movies/MovieDetailView'

// articles Views
import ArticleListView from '@/views/articles/ArticleListView'
import ArticleDetailView from '@/views/articles/ArticleDetailView'
import ArticleNewView from '@/views/articles/ArticleNewView'
import ArticleEditView from '@/views/articles/ArticleEditView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'MovieView',
    component: MovieView,
    meta: {
      enterClass: "animate__animated animate__zoomIn",
      leaveClass: "animate__animated animate__zoomOut"
    }
  },
  //articles
  {
    path: '/articlelist',
    name: 'ArticleListView',
    component: ArticleListView,
    meta: {
      enterClass: "animate__animated animate__zoomIn",
      leaveClass: "animate__animated animate__zoomOut"
    }
  },
  {
    path: '/articlelist/:articlePk',
    name: 'ArticleDetailView',
    component: ArticleDetailView,
    meta: {
      enterClass: "animate__animated animate__zoomIn",
      leaveClass: "animate__animated animate__zoomOut"
    }
  },
  {
    path: '/articlelist/new',
    name: 'ArticleNewView',
    component: ArticleNewView,
    meta: {
      enterClass: "animate__animated animate__zoomIn",
      leaveClass: "animate__animated animate__zoomOut"
    }
  },
  {
    path: '/articlelist/:articlePk/edit',
    name: 'ArticleEdit',
    component: ArticleEditView,
    meta: {
      enterClass: "animate__animated animate__zoomIn",
      leaveClass: "animate__animated animate__zoomOut"
    }
  },

  // accounts
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    meta: {
      enterClass: "animate__animated animate__zoomIn",
      leaveClass: "animate__animated animate__zoomOut"
    }
  },
  {
    path: '/signup',
    name: 'SignupView',
    component: SignupView,
    meta: {
      enterClass: "animate__animated animate__zoomIn",
      leaveClass: "animate__animated animate__zoomOut"
    }
  },


  {
    path: '/random',
    name: 'RandomView',
    component: RandomView,
    meta: {
      enterClass: "animate__animated animate__zoomIn",
      leaveClass: "animate__animated animate__zoomOut"
    }
  },
  {
    path: `/movies/:movie_pk`,
    name: 'MovieDetailView',
    component: MovieDetailView,
    meta: {
      enterClass: "animate__animated animate__zoomIn",
      leaveClass: "animate__animated animate__zoomOut"
    }
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // Login 안해도 접근 가능
//   // const publicPages = ['Home', 'Signup', 'Login']

//   // Login 해야만 함
//   const privatePages = ['Logout', 'Profile', 'MovieDetail', 'NewsFeed', 'OtherUserProfile']
//   // Login 안해야만 함
//   const outerPages = ['Signup', 'Login']

//   const authRequired = privatePages.includes(to.name)
//   const guestRequired = outerPages.includes(to.name)
//   const isLoggedIn = store.getters.isLoggedIn

//   // 없는 곳으로 오려 한다면
//   if (!to.name) {
//     next({ name: 'NotFound' })
//   }

//   // 로그인 사용자는 PASS 시켜야 할 때, 
//   if (guestRequired && isLoggedIn) {
//     next({ name: 'Movies' })
//   }

//   // 로그인을 해야만 할 때
//   if (authRequired && !isLoggedIn) {
//     next ({ name: 'Login' })
//   } else {
//     next()
//   }
//   authRequired && !isLoggedIn ? next({ name: 'Login' }) : next()

// })

// // 라우터 이동이 끝나고 해야하는 일들
// router.afterEach(() => {
//   console.log("router moved")
// })

export default router
