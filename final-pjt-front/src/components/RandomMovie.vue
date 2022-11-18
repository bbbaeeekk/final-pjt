<template>
  <div class="card h-100 col row g-4 m-auto" :style="{'background-image':`url(${this.$store.getters.random_movies.backdrop_path})`}" style="height:100vh background-repeat:no-repeat">
    <div>
        <button type="button" class="btn btn-success" @click="RandomMovie">다른영화 보기</button>
    </div>
    <br>
    <div>
        <img :src="this.$store.getters.random_movies.poster_path" class="card-img-top" alt="..." style="width:60%">
        <div class="card-body mb-4" style="width:60%; background-color:azure; overflow: hidden;">
            <h5 class="card-title"><b>{{this.$store.getters.random_movies.title}}</b></h5>
            <p class="card-text"><b>평점 : {{this.$store.getters.random_movies.vote_avg}}</b></p>
            <h5 class="card-text cardpoint"><b>{{this.$store.getters.random_movies.overview}}</b></h5>
        </div>
    </div>
  </div>
</template>

<script>
// import random_movie from '@/store/modules/random_movie'

export default {
    name : 'RandomMovie',
    methods: {
        RandomMovie() {
            this.$store.dispatch('random_Movies')
        }
    },
}

</script>

<style>
.cardpoint {
  overflow:hidden;
  line-height: 2rem;
  max-height: 15rem;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
}
</style>