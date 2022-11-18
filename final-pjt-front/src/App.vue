<template>
  <div id="app">
    <nav id="navbar-example2" class="navbar px-3 mb-3" style="background-color: #e3f2fd;">
      <!-- 메인페이지로 가는 상단 로고 -->
      <div>
        <RouterLink :to="{ name: 'HomeView' }">
          <div class="mx-auto mt-auto">
            <img width=70px class="neumorph" :class="{grayscale:!isHovering}" @mouseover="isHovering = true" @mouseout="isHovering = false" src="@/assets/ssafy_logo.png" alt="logo to mainpage">
          </div>
        </RouterLink>
      </div>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" style="text-decoration:none;">홈</router-link> &nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link to="/movie" style="text-decoration:none;">영화정보</router-link> &nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link to="/login" style="text-decoration:none;">로그인</router-link>&nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link to="/article" style="text-decoration:none;">게시판</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default{
  name:'App',
  computed: {

  },
  data() {
    return {
      isHovering: false
    }
  }

}


</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
