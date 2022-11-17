<template>
    <div>
        <div class="card h-100 col">
            <img :src="'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+movie.poster_path" class="card-img-top" alt="...">
            <div class="card-body mb-4" style="width:100%; height:30vh; overflow: hidden;">
                <h5 class="card-title"><b>{{movie.title}}</b></h5>
                <!-- <p class="card-text"><b>평점 : {{movie.vote_avg}}</b></p> -->
                <p class="card-text cardpoint">{{movie.overview}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'MovieCard',
    props: {
        'movie':Object,
    }
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
