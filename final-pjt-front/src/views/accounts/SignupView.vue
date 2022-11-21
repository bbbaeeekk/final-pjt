<template>
  <div class="container" style="height: 100vh;">
    <div class="row">
      <h1 class="mb-3">Signup</h1>
      <div class="col-4"></div>
      <div class="card neumorph col-4 align-items-center">
        <div>
          <label for="username">username</label>
          <input v-model="signupData.username" id="username" type="text" class="form-control mb-3" />
        </div>
        <div>
          <label for="password1">password</label>
          <input v-model="signupData.password1" id="password1" type="password" class="form-control mb-3" />
        </div>
        <div>
          <label for="password2">password comfirm</label>
          <input v-model="signupData.password2" id="password2" type="password" class="form-control mb-3" />
        </div>
        <div>
          <button @click="signup(signupData)" class="btn neumorph mb-3">Signup</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignupView',
  data() {
    return {
      signupData: {
        username: null,
        password1: null,
        password2: null,
      }
    }
  },
  methods: {
    ...mapActions(['signup'])
  }
}
</script>

<style>


</style>

