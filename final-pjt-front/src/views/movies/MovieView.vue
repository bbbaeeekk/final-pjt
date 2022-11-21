<template>
    <div>
        <div>
            <router-link 
            to="/random"
            style="text-decoration:none;">
            <button type="button" class="btn btn-success">랜덤영화</button>
            </router-link>
        </div>
        <div class="row row-cols-1 row-cols-xl-5 row-cols-md-4 row-cols-sm-2 g-4 m-auto" style="width:80%;">
            <MovieCard
            v-for="movie in this.$store.getters.movies"
            :key="movie.id"
            :movie="movie"
            />
        </div>
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
            ...mapActions(['getMovies',]),
        },
        created(){
            this.getMovies()
        },

    }

  </script>
  
  <style>
  
  </style>
