<template>
  <div>
    <h2>Profile</h2>
    <div class="m-3">
      name
      <h1 class="underline">{{ getUsername }}</h1>
    </div>
    <div class="container mt-5">
      <h3>찜한 영화 목록</h3>
      <div class="row row-cols-1 row-cols-sm-auto justify-content-center">
        <MovieCard
          v-for="movie in wishMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
    <div class="my-5">
      <h2>내 활동</h2>
        <div v-for="review in myReviews" :key="review.id" class="neumorph card mb-4 mx-auto" style="width: 80%" @click="goToReviewDetail(review)">
          <h5>{{ review.username }}님이 <span class="underline">{{ review.movie_title }}</span> 영화에 <span style="color: #FC4445">{{ review.rating }}</span>점을 줬습니다.</h5>
          <h6 class="mt-2">{{ review.title }}</h6>
          <p class="mx-4">{{ review.content }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'ProfileView',
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters(['getUsername', 'userInfo', 'wishMovies', 'myReviews'])
  },
  methods: {
    ...mapActions(['fetchUserInfo', 'fetchWishMovies', 'fetchMyReviews', 'goToReviewDetail', 'fetchSingleReview']),
    goToReviewDetail(review) {
      this.fetchSingleReview({movie_pk: review.movie, review_pk: review.id})
      this.$router.push({ name: 'ReviewDetail', params: {movie_pk: review.movie, review_pk: review.id} })
    },
  },
  mounted() {
    this.fetchUserInfo(this.getUsername)
    this.fetchWishMovies()
    this.fetchMyReviews()
  }
}
</script>

<style>

</style>