<template>
  <!-- movieDetail이 영화정보 -->
    <!-- <transition  
      appear
      appear-active-class="animate__animated animate__zoomIn"
      name="router-anim" > -->
      <!--
      enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
      -->
    <div v-if="show" class="container p-3 mt-3">
      <h1>Movie Detail</h1>
      {{movieDetail}}
      <div class="container neumorph p-5">
        <div>
          <!-- 뒤로가기 버튼 -->
          <button class="neumorph button back-button" style="height: 40px" @click="goBack" type="button">BACK</button>
          <h2>{{ movieDetail.title }}</h2>
        </div>
        
        <div class="row p-3 neumorph3">
          <div class="col-12 col-lg-4 align-items-center p-3">
            <img :src="movieDetail.poster_path" alt="" class="img-fluid">
            <!-- <div>
              <button @click="wishMovieAndChange(movieDetail.id)" class="btn neumorph">{{ wish }}</button>
            </div> -->
          </div>
          <div class="col-12 col-lg-8 p-3">
            <!-- <div class="ratio ratio-16x9 my-4">
              <iframe :src="`https://www.youtube.com/embed/${trailerYoutubeId}`" title="YouTube video player" allowfullscreen></iframe>
            </div> -->
            <!-- descriptions -->
            <div class="description mx-3 mt-3">
            <h6 class="my-3">개봉 : {{ movieDetail.release_date }}</h6>
            {{ movieDetail.overview }}
            </div>
          
          </div>
  
        </div>
        <!-- <div class="row">
          <div class="my-5">
            <ReviewList />
          </div>
          <div>
            <ReviewCreateForm />
          </div>
        </div> -->
      </div>
    </div>
    <!-- </transition> -->
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
//   import ReviewCreateForm from '@/components/ReviewCreateForm'
//   import ReviewList from '@/components/ReviewList'
  export default {
    name: 'MovieDetailView',
    data() {
      return {
        // wish: '',
        show: true
      }
    },
    components: {
      // ReviewCreateForm, ReviewList, 
    },
    computed: {
      ...mapGetters(['movieDetail'])
      // 'movieDetailReviews', 'reviews', 'trailerYoutubeId', 'getUsername', 'userInfo'
    },
    methods: {
      ...mapActions(['getMovieDetail',]),
      // 'fetchMovieDetailReviews', 'wishMovie', 'fetchUserInfo'
      // setWish() {
      //   if (this.movieDetail.wish_users.includes(this.userInfo.id)) {
      //     this.wish = "찜 취소"
      //   } else {
      //     this.wish = "찜하기"
      //   }
      // },
      // wishMovieAndChange(movieId) {
      //   this.wishMovie(movieId)
      //   this.wish = this.wish === "찜하기" ? "찜 취소" : "찜하기"
      // },
      goBack() {
        this.$router.go(-1)
      }
    },
    updated() {
      // this.setWish()
    },
    created() {
      this.moviedetail()
      // this.setWish()
    }
  }
  </script>
  
  <style>
  .fade-enter-from,
  .fade-enter-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
  .description {
    font-family: 'Nanum Gothic', sans-serif;
  }
  </style>