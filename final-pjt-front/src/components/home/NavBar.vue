<template>
  <div id="NavBar">

  <nav id="navbar-example2" class="navbar px-3 mb-3" style="background-color:black;">
      <!-- 메인페이지로 가는 상단 로고 -->
      <div>
        <RouterLink :to="{ name: 'home' }">
          <div class="mx-auto mt-auto">
            <img width=70px class="neumorph" :class="{grayscale:!isHovering}" @mouseover="isHovering = true" @mouseout="isHovering = false" src="@/assets/디즈니이미지-removebg-preview.png" alt="logo to mainpage">
          </div>
        </RouterLink>
      </div>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" style="text-decoration:none;">홈</router-link> &nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link to="/movies" style="text-decoration:none;">영화</router-link> &nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link to="/community" style="text-decoration:none;">커뮤니티</router-link> &nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link v-if="!isLoggedIn" to="/login" style="text-decoration:none;">로그인</router-link> &nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <router-link v-if="isLoggedIn && username " :to="{ name: 'profile', params: {username} }">MYPAGE</router-link> &nbsp;&nbsp;&nbsp;
        </li>
        <li class="nav-item">
          <div v-if="isLoggedIn" @click="logout" style="color:white;" >LOGOUT</div>  &nbsp;&nbsp;&nbsp;
        </li>
      </ul>
    </nav>


  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'NavBar',
  data() {
    return {
      isHovering: false
    }
  },
  methods: {
    ...mapActions(['logout'])
  },
  computed:{
    ...mapGetters(['isLoggedIn', 'currentUser']),
    username(){
      return this.currentUser.username
    }
  },
}
</script>

<style>
/* nav style */

.navbar {
  position: sticky;
  top: 0;
  height: 8vh;
  width: 100%;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
  /* 어두운 테마 */
  /* background-color: #3282B8; */
  /* 밝은 테마 */
  background-color: #3F72AF;
}

.navbar-collapse{
  background-color: #dcdfdd;
}

.navstart{
  height:80%;
  width:50%;
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  margin-left: 70px;
}

.navbar-brand a div{
  color: #bac6cb;
}

.navstart a {
  text-decoration: none;
}

.navicon{
  height:30%;
  width:30%;
}

.navbar-nav a, .navbar-nav div {
  margin-left: 70px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #DBE2EF;
  /* color: #bac6cb; */
}

.navend{
  /* background-color: #3f3f3f ; */
  /* 어두운 테마 */
  background-color: #3F72AF;
  /* 밝은 테마 */
  /*background-color: #112D4E;*/
  display: flex;
  justify-self: end;
  padding: 0;
}

.navbar-nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 10px;
}

.navbar-toggler{
  margin-right: 70px;
}

.navbar-collapse{
  /* background-color: #3f3f3f ; */
  /* 어두운 테마 */
  background-color: #3F72AF;
  /* 밝은 테마 */
  /* background-color: #112D4E; */
  display: flex;
  justify-content: flex-end;
  margin-right: 70px;
}

nav a:hover{
  color: #e8c171;
  transition:all.5s;
}

nav div a.router-link-exact-active {
  color: #e8c171;
  border-bottom: 3px solid;
}

</style>