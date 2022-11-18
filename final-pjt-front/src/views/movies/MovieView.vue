<template>
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4 m-auto" style="width:90%">
            <MovieCard
            v-for="movie in this.$store.state.MovieDatas"
            :key="movie.id"
            :movie="movie"
            />
        </div>
    </div>
  </template>
  
  <script>
    // import axios from 'axios';
    import MovieCard from '@/components/MovieCard'

    // 여기에 django db에 있는 영화들을 가져오기

    export default {
        name: 'MovieView',
        data(){
            return {
                movieData : null
            }
        },
        components: {
            MovieCard
        },
        methods: {
            getMovies(){
                this.$store.dispatch('getMovies')
            },
        },
        created(){
            this.getMovies()
        },

    }

  </script>
  
  <style>
  
  </style>
