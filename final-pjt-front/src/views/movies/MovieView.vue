<template>
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4 m-auto" style="width:90%">
            <MovieCard
            v-for="movie in this.$store.getters.movies"
            :key="movie.id"
            :movie="movie"
            />
        </div>
    </div>
  </template>
  
  <script>
    // import axios from 'axios';
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
