<template>
  <div id="app">
    <nav id="navbar-example2" class="navbar px-3 mb-3" style="background-color: #e3f2fd;">
      <img @click="GoHome" src="./assets/ssafy_logo.png" alt="" style="width:40px" class="col-1">
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
  methods: {
    GoHome() {
      if (this.$route.path !== '/') {
        this.$router.push({name:'HomeView'})
      }
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
</style>
