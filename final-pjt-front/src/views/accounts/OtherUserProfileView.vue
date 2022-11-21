<template>
  <div>
    <!-- <h1>Other User Profile</h1> -->
    <div>
      <!-- 뒤로가기 버튼 -->
      <button class="neumorph button back-button m-3" style="height: 40px" @click="goBack" type="button">BACK</button>
      <h2>{{ getOtherUser.username }}님의 활동</h2>
    </div>
    <div class="m-3">
      <button @click="onClickFollowOtherUser" class="btn neumorph">{{ follow }}</button>
    </div>
    <div>
      <div v-for="review in otherReviews" :key="review.id" class="neumorph card mb-4 mx-auto" style="width: 80%" @click="goToReviewDetail(review)">
        <h5>{{ review.username }}님이 <span class="underline">{{ review.movie_title }}</span> 영화에 <span style="color: #FC4445">{{ review.rating }}</span>점을 줬습니다.</h5>
        <p>{{ calTime(review) }}</p>
        <h6 class="mt-2">{{ review.title }}</h6>
        <p class="mx-4">{{ review.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

export default {
  name: 'OtherUserProfileView',
  data() {
    return {
      follow: ''
    }
  },
  computed: {
    ...mapGetters(['getOtherUser', 'userInfo', 'otherReviews'])
  },
  methods: {
    ...mapActions(['followOtherUser', 'fetchOtherReviews', 'fetchSingleReview']),
    onClickFollowOtherUser() {
      this.followOtherUser(this.getOtherUser.username)
      this.setFollow()
    },
    setFollow() {
      if (this.getOtherUser.followers.includes(this.userInfo.id)) {
        this.follow = '팔로우 취소'
      } else {
        this.follow = '팔로우'
      }
    },
    goToReviewDetail(review) {
      this.fetchSingleReview({movie_pk: review.movie, review_pk: review.id})
      this.$router.push({ name: 'ReviewDetail', params: {movie_pk: review.movie, review_pk: review.id} })
    },
    calTime(review) {
      return moment(review.updated_at).fromNow()
    },
      goBack() {
          this.$router.go(-1);
      },
  },
  updated() {
    this.setFollow()
    this.fetchOtherReviews(this.getOtherUser.username)
  },
  mounted() {
    this.setFollow()
    this.fetchOtherReviews(this.getOtherUser.username)
  },
}
</script>

<style>

</style>