<template>
  <div v-if="random_movies">
    <div class="wrapper card h-100 col row g-4 m-auto" :style="{'background-image':`url(${random_movies.backdrop_path})`}" style="height:100vh">
      <div>
          <button type="button" class="btn btn btn-primary" @click="RandomMovie">랜덤영화</button>
      </div>
      <div style="width:100%; padding:350px; padding-top:20px;">
          <img :src="random_movies.poster_path" class="card-img-top" style="height:auto;" alt="...">
          <div class="card-body" style="background-color:azure; overflow: hidden;">
              <h5 class="card-title"><b>{{random_movies.title}}</b></h5>
              <p class="card-text"><b>평점 : {{random_movies.vote_avg}}</b></p>
              <h5 class="card-text cardpoint"><b>{{random_movies.overview}}</b></h5>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import random_movie from '@/store/modules/random_movie'
import { mapGetters } from 'vuex'

export default {
    name : 'RandomMovie',
    methods: {
        RandomMovie() {
            this.$store.dispatch('random_Movies')
        }
    },
    computed: {
            ...mapGetters(['random_movies'])
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

.wrapper {
  /* width: 500px;*/
  /* display: flex; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>