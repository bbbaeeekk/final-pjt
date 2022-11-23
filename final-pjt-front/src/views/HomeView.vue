<template>
  <div class="home" style="height:100vh">
    <h1 style="color:crimson">장르를 선택하세요</h1>
    <hr>
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=28>액 션</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=12>모 험</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=16>애니메이션</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=35>코미디</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=80>범 죄</button>&nbsp;&nbsp;&nbsp;
      <br>
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=99>다큐멘터리</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=18>드라마</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=10751>가 족</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=14>판타지</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=36>역 사</button>&nbsp;&nbsp;&nbsp;
      <br>
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=27>공 포</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=10402>음 악</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=9648>미스테리</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=10749>로맨스</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=878>S F</button>&nbsp;&nbsp;&nbsp;
      <br>
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=10770>TV 영화</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=53>스릴러</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=10752>전 쟁</button>&nbsp;&nbsp;&nbsp;
      <button @click="genre_pick" class="btn btn-danger avtive" data-as-toggle="button" style="width:120px" value=37>서 부</button>
    <br>
    <router-link to='/genre_movies' class="btn btn-primary mt-3" style="width:130px">영화보러가기</router-link>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
      name: 'HomeView',
      components: {},
      data() {
          return {
            pick_movie:[],
            select_movie : [],
            search_value:"",
          }
      },
      computed: {
        ...mapGetters(['movies',]),
      },
      methods: {
          ...mapActions(['getMovies',]),
          genre_pick(event) {
            this.select_movie = []
            if (this.pick_movie.includes(event.target.value)) {
              this.pick_movie.splice(this.pick_movie.indexOf(event.target.value), 1)
            }
            else {
              this.pick_movie.push(event.target.value)
            }
            this.movies.forEach((movie) => {
              for (const genre of this.pick_movie) {
                if (movie.genre.includes(Number(genre))) {
                  this.select_movie.push(movie)
                  break
                }
              }
            })
            this.$store.dispatch('genre_movie',this.select_movie)
          }
        },
      created(){
          this.getMovies()
      },
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

.home {
  align-content: center;
  width: 300px;
  height: 100%;
  border: 1px solid; 
  padding:30px; 
  background-color: white; 
  color:black;
  margin:0 auto;
  border-radius: 20px;

  font-family: 'Jua', sans-serif;
}

</style>