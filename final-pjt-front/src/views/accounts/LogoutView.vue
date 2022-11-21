<template>
  <div>
    <!-- URL : Component = 1 : 1
    이 모든 작업은 
    vue-router 기준 / logout URL을 구성하기 위함입니다. -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LogoutView',
  methods: {
    ...mapActions(['logout'])
  },
  created() {
    console.log(this.$store.state.authToken)
    this.logout()
  }
}
</script>

<style>

</style>