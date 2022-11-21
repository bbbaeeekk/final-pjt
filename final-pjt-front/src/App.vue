<template>
  <div id="app">
    <nav id="navbar-example2" class="navbar px-3 mb-3">
      <!-- 메인페이지로 가는 상단 로고 -->
      <div>
        <RouterLink :to="{ name: 'HomeView' }">
          <div class="mx-auto mt-auto">
            <img width=70px class="neumorph" :class="{grayscale:!isHovering}" @mouseover="isHovering = true" @mouseout="isHovering = false" src="@/assets/ssafy_logo.png" alt="logo to mainpage">
          </div>
        </RouterLink>
      </div>
      <b v-if="isLoggedIn">{{getUsername}} 님 환영합니다</b>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" style="text-decoration:none;">홈</router-link> &nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link to="/movies" style="text-decoration:none;">영화</router-link> &nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link to="/articlelist" style="text-decoration:none;">게시판</router-link>&nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link to="/login" v-if="!isLoggedIn" style="text-decoration:none;">로그인</router-link>&nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link to="/logout" v-if="isLoggedIn" style="text-decoration:none;">로그아웃</router-link>&nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ProfileView', params: { username: getUsername } }"
          v-if="isLoggedIn" style="text-decoration:none;">프로필</router-link>&nbsp;&nbsp;&nbsp;
        </li>

      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  name:'App',
  computed: {
    ...mapGetters(['isLoggedIn']),
    ...mapGetters(['getUsername']),
  },
  data() {
    return {
      isHovering: false
    }
  }

}


</script>



<style>
/* html {
  background-image:url("./assets/background_image1.jpg")
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image:url("./assets/background_image1.jpg")
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.neumorph3 {
  border-radius: 13px;
  background: #ececec;
  box-shadow: inset 11px 11px 19px #acacac, inset -11px -11px 19px #ffffff
}
</style>
