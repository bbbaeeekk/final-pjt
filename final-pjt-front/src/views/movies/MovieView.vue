<template>
    <div class="row row-cols-1 row-cols-md-3 g-4 m-auto" style="width:90%">
        <button><router-link to="/random" style="text-decoration:none;">랜덤영화 보러가기</router-link></button>
        <MovieCard
        v-for="movie in this.$store.getters.movies"
        :key="movie.id"
        :movie="movie"
        />
    </div>
  </template>
  
  <script>
    import { mapGetters, mapActions } from 'vuex'
    import MovieCard from '@/components/MovieCard'

    export default {
        name: 'MovieView',
        components: {MovieCard},
        data(){
            return {

            }
        },
        computed: {
            ...mapGetters([])
        },
        methods: {
            ...mapActions(['getMovies',])
        },
        created(){
            this.getMovies()
        },

    }

  </script>
  
  <style>
  
  </style>
