// api/drf.js

export default {
    URL: 'http://127.0.0.1:8000/',
    ROUTES: {
      signup() {
        return 'rest-auth/signup/'
      },
      login() {
        return 'rest-auth/login/'
      },
      logout() { 
        return 'rest-auth/logout/'
      },
      profile(username) {
        return `accounts/profile/${username}/`
      },
      follow(username) {
        return `accounts/follow/${username}/`
      },
      newsfeed() {
        return `accounts/newsfeed/`
      },
      get_recom_movie_list() {
        return 'accounts/recommend/'
      },
      wish_movies() {
        return 'accounts/wish_movies/'
      },
      my_reviews() {
        return 'accounts/my_reviews/'
      },
      other_reviews(username) {
        return `accounts/other_reviews/${username}/`
      }, 
      get_movie_list() {
        return 'api/v1/'
      },
      get_movie_detail(movie_pk) {
        return `movies/${movie_pk}`
      },
      movie_wish(movie_pk) {
        return `movies/${movie_pk}/wish/`
      },
      review_list_or_create(movie_pk) {
        return `movies/${movie_pk}/reviews/`
      },
      review_update_or_delete(movie_pk, review_pk) {
        return `movies/${movie_pk}/reviews/${review_pk}/`
      },
      review_like(movie_pk, review_pk) {
        return `movies/${movie_pk}/reviews/${review_pk}/like/`
      },
      comment_create(movie_pk, review_pk) {
        return `movies/${movie_pk}/reviews/${review_pk}/comments/`
      },
      comment_update_or_delete(movie_pk, review_pk, comment_pk) {
        return `movies/${movie_pk}/reviews/${review_pk}/comments/${comment_pk}/`
      },
      
    }
  }