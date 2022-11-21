<template>
  <div >
    
    <div class="box">
      <form @submit.prevent="onSubmit">
        <div>
          <input v-model="newArticle.article_title" id="title" 
          class="input is-link " placeholder="제목을 입력해주세요."/>
        </div>
        <br>
        <div>
          <textarea v-model="newArticle.article_content" type="text" id="content" class="textarea is-link is-hovered is-large"
          placeholder="내용을 입력해주세요."></textarea>
        </div>
        <br>
        <div>
          <button>{{ action }}</button>
        </div>
      </form>
    </div>



  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ArticleForm',
    props: {
      article: Object,
      action: String,
    },
    data() {
      return {
        newArticle: {
          article_title: this.article.article_title,
          article_content: this.article.article_content,
        }
      }
    },

    methods: {
      ...mapActions(['createArticle', 'updateArticle']),
      onSubmit() {
        if (this.action === 'create') {
          this.createArticle(this.newArticle)
        } else if (this.action === 'update') {
          const payload = {
            pk: this.article.pk,
            ...this.newArticle,
          }
          this.updateArticle(payload)
        }
      },
    },
  }

</script>

<style></style>
