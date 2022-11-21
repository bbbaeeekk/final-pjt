<template>
  <!-- movieDetail이 영화정보 -->
    <!-- <transition  
      appear
      appear-active-class="animate__animated animate__zoomIn"
      name="router-anim" > -->
      <!--
      enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
      -->
    
    <div class="wrapper card h-100 col row g-4 m-auto" :style="{'background-image':`url(${movieDetail.backdrop_path})`}">
      <div class="container p-3 mt-3">
        <div class="container neumorph p-5">
          <div class="row p-3 neumorph3">
            <h2><b>{{ movieDetail.title }}</b></h2>
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
              <h6 class="my-3"><b>{{ movieDetail.release_date }} 개봉</b></h6>
              <h6 class="my-3"><b>장르 :
              <span v-for="(genre, index) in movieDetail.genre" :key="index">
                {{ genre.name }}
              </span></b></h6>
              <h6 class="my-3"><b>평점 : {{ movieDetail.vote_avg }}</b></h6>
              {{ movieDetail.overview }}
              <!-- 뒤로가기 버튼 -->
              <div>
                <button type="button" class="btn btn-danger mt-5" style="height: 40px; width:300px;" @click="goBack">BACK</button>
              </div>
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
        movie_pk:this.$route.params.movie_pk
        // wish: '',
        // show: true
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
      // moviedetail() {
      //   this.$router.push({name:'MovieDetailView', params:{movie_pk:`${this.movieDetail.id}`}})
      // },
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
      this.getMovieDetail(this.movie_pk)
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

  .wrapper {
  /* width: 500px;*/
  /* display: flex; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height:150vh;
}
  </style>