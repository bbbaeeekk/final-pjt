<template>
  <div style="height:100vh">
    <h1 style="color:crimson">장르를 선택하세요</h1>
    <button @click="select_genre">제출</button>
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
    <div v-if="submit">
      <div class="row row-cols-1 row-cols-xl-5 row-cols-md-4 row-cols-sm-2 g-4 m-auto" style="width:80%;">
        <SelectMovie
          v-for="movie in selectmovie"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import SelectMovie from '@/components/SelectMovie'

  export default {
      name: 'HomeView',
      components: {SelectMovie,},
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
            submit:false,
            selectmovie : []
          }
      },
      computed: {
        ...mapGetters(['movies',]),
      },
      methods: {
          ...mapActions(['getMovies',]),
          select_genre(){
            this.submit = true
            this.movies.forEach((movie) => {
              for (const genre of this.selectedgenre) {
                if (movie.genre.includes(genre)) {
                  this.selectmovie.push(movie)
                  break
                }
              }
            })
          }
      },
      created(){
          this.getMovies()
      },
  }

</script>

<style>

</style>