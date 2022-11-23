<template>
    <div class="container" style="height:100vh">
      <h1>Search</h1>
      <h6 class="description mb-5 underline">함 검색 해봐라</h6>
      
      <div class="input d-flex justify-content-between align-items-start" style="width: 60%">
        <input type="text" v-model="query" class="form-control my-3" @input="searchMovies(query)" @keyup.enter="searchMovies(query)"> &nbsp;&nbsp;&nbsp;
      </div>
  
      <div class="row row-cols-1 row-cols-xl-5 row-cols-md-4 row-cols-sm-2 g-4 m-auto" style="width:80%;" v-if="searchedMovies">
              <MovieCard
              v-for="movie in searchedMovies"
              :key="movie.id"
              :movie="movie"
              />
          </div>
      
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex'
  import MovieCard from '@/components/MovieCard.vue'
  
  export default {
    name: 'MovieSearchView',
    components: {
      MovieCard
    },
    data() {
      return {
        query: '',
      }
    },
    methods: {
      ...mapActions(['searchMovies'])
    },
    computed: {
      ...mapGetters(['searchedMovies', 'movies'])
    }
  }
  </script>
  
  <style>
  .input {
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  
  input {
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    background: #f5f5f5;
    box-shadow: 5px 8px 10px #d1d1d1, -5px -8px 10px #fff;
    color: #bfbfbf;
    transition:0.5s;
  }
  
  input:hover 
  {
    box-shadow: 5px 8px 10px #fff, 5px -8px 5px #d1d1d1;
  }
  </style>
  