<template>
  <div class="container" @keyup.enter="login(loginData)" style="height: 100vh;">
    <div class="row">
      <h1>Login</h1>
      <div class="col-4"></div>
      <div class="card neumorph col-4 align-items-center">
        <div class="m-4">
          <label for="username">username</label>
          <input v-model="loginData.username" id="username" type="text" class="form-control mb-3" />
        </div>
        <br>
        <div>
          <label for="password">password</label>
          <input v-model="loginData.password" id="password" type="password" class="form-control mb-3" />
        </div>
        <br>
        <div class="mx-auto">
          <button class="mx-auto btn neumorph mb-3" @click="login(loginData)"><b>로그인</b></button>
        </div>
        <div class="mx-auto">
          <router-link to="/signup" style="text-decoration:none;"><b>회원가입</b></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginView',
  data() {
    return {
      loginData: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style>

</style>