<template>
  <div>
    <RandomMovie
    v-for="random_movie in this.$store.getters.random_movies"
        :key="random_movie.id"
        :random_movie="random_movie"
    />
  </div>
</template>

<script>
// import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import RandomMovie from '@/components/RandomMovie'

export default {
    name: 'RandomView',
    components: {RandomMovie},
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters([])
    },
    methods: {
        ...mapActions(['random_Movies',])
    },
    created(){
        this.random_Movies()
    },
}
</script>

<style>

</style>