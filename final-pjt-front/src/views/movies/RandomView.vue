<template>
  <div>
    <RandomMovie/>
  </div>
</template>

<script>
    // import _ from 'lodash'
    import { mapGetters, mapActions } from 'vuex'
    import RandomMovie from '@/components/RandomMovie'

    export default {
        name: 'RandomView',
        components: {RandomMovie},
        data(){
            return {

            }
        },
        computed: {
            ...mapGetters([])
        },
        methods: {
            ...mapActions(['random_Movies',])
        },
        created(){
            this.random_Movies()
        },
    }
</script>

<style>

</style>