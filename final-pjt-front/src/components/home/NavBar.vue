<template>
  <div id="NavBar">

  <nav id="navbar-example2" class="navbar px-4" style="background-color:black;">
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
          <router-link to="/" style="text-decoration:none;">홈&nbsp;&nbsp;&nbsp;</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/movies" style="text-decoration:none;">영화&nbsp;&nbsp;&nbsp;</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/community" style="text-decoration:none;">커뮤니티&nbsp;&nbsp;&nbsp;</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="!isLoggedIn" to="/login" style="text-decoration:none;">로그인&nbsp;&nbsp;&nbsp;</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="isLoggedIn && username " :to="{ name: 'profile', params: {username} }" style="text-decoration:none;">MYPAGE&nbsp;&nbsp;&nbsp;</router-link>
        </li>
        <li class="nav-item">
          <div v-if="isLoggedIn" @click="logout" style="color:white; cursor:pointer;" >LOGOUT</div>
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
}

nav a:hover{
  color: #e8c171;
  transition:all.5s;
}

nav a:link{
  color: white;
}

</style>