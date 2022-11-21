<template>
    <div>
        <div class="card h-100 col popular-list movie-item" @click="movie_detail">
            <img :src="movie.poster_path" class="card-img-top" alt="..." style="height:400px; width:100%">
            <div class="card-body mb-4" style="width:100%; height:100px; overflow: hidden;">
                <h5 class="card-title"><b>{{movie.title}}</b></h5>
                <p class="card-text"><b>평점 : {{movie.vote_avg}}</b></p>
                <!-- <p class="card-text cardpoint">{{movie.overview}}</p> -->
            </div>
        </div>
    </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
    name:'MovieCard',
    props: {
        'movie':Object,
    },
    methods: {
        // ...mapActions(['getMovieDetail']),
        movie_detail() {
            this.$store.dispatch('getMovieDetail',this.movie.id)
            this.$router.push({name:'MovieDetailView', params:{movie_pk:`${this.movie.id}`}})
        }
    },
    // computed: {
    //   ...mapGetters(['movieDetail'])
    // },
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

.movie-item {
  position: relative;
  display: block;
  flex: 1 1 0px;
  transition: transform 500ms;
}

.movie-item:focus,

.movie-item:hover {
  transform: scale(1.4);
  z-index: 1;
}
</style>
