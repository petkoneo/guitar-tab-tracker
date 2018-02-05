<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <songs-search-panel />
      <songs-panel class="mt-3" />
    </v-flex>
  </v-layout>

</template>

<script>
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
import SongsSearchPanel from './SongsSearchPanel'

export default {
    components: {
        SongsPanel,
        SongsSearchPanel
    },
    data(){
        return {
            songs: null
        }
    },
    async mounted() {
        this.songs = (await SongsService.index()).data
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song{
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title{
  font-size: 32px ;
  }
  .song-artist{
    font-size: 24px ;
  }
  .song-genre{
    font-size: 18px ;
  }

  .album-image{
  width: 70%;
  margin: 0 auto;
}
</style>
