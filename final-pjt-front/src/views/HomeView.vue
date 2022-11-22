<template>
  <div style="height:100vh">
    <h1 style="color:crimson">장르를 선택하세요</h1>
    <b-form-group v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        v-model="selectedgenre"
        :options="options"
        :aria-describedby="ariaDescribedby"
        buttons
        button-variant="danger"
        size="lg"
        name="genre_buttons"
      ></b-form-checkbox-group>
    </b-form-group>
    <button class="mt-3 btn btn-primary" @click="select_genre">영화보러가기</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
      name: 'HomeView',
      components: {},
      data() {
          return {
            selectedgenre : [],
            options: [
              { text: '액션', value: 28 },
              { text: '모험', value: 12 },
              { text: '애니메이션', value: 16 },
              { text: '코미디', value: 35 },
              { text: '범죄', value: 80 },
              { text: '다큐멘터리', value: 99 },
              { text: '드라마', value: 18 },
              { text: '가족', value: 10751 },
              { text: '판타지', value: 14 },
              { text: '역사', value: 36 },
              { text: '공포', value: 27 },
              { text: '음악', value: 10402 },
              { text: '미스테리', value: 9648 },
              { text: '로맨스', value: 10749 },
              { text: 'SF', value: 878 },
              { text: 'TV 영화', value: 10770 },
              { text: '스릴러', value: 53 },
              { text: '전쟁', value: 10752 },
              { text: '서부', value: 37 },
            ],
            selectmovie : [],
            search_value:""
          }
      },
      computed: {
        ...mapGetters(['movies',]),
      },
      methods: {
          ...mapActions(['getMovies',]),
          select_genre(){
            this.movies.forEach((movie) => {
              for (const genre of this.selectedgenre) {
                if (movie.genre.includes(genre)) {
                  this.selectmovie.push(movie)
                  break
                }
              }
            })
          this.$store.dispatch('genre_movie',this.selectmovie)
          }
      },
      created(){
          this.getMovies()
      },
  }

</script>

<style>

</style>