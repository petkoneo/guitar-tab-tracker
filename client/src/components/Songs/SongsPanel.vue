<template>
        <panel title="Songs">

            <v-btn class="cyan accent-3"
            slot="action"
            @click="navigateTo({name: 'songs-create'})"
            dark
            absolute
            right
            fab>
            <v-icon>add</v-icon>
          </v-btn>

            <div class="song"
              v-for="song in songs"
              :key="songs.id">
              <v-layout>
                <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
                  <div class="song-artist">
                    {{song.artist}}
                  </div>
                  <div class="song-genre">
                    {{song.genre}}
                  </div>
                  <v-btn
                  dark
                  class="cyan"
                  @click="navigateTo({
                  name: 'song',
                   params:{
                   songId: song.id}})">
                    Otvorit
                  </v-btn>
                </v-flex>
                <v-flex xs6>
                <img class="album-image"
                     :src="song.albumImageUrl"/>
                </v-flex>
              </v-layout>
            </div>
        </panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
    data(){
        return {
            songs: null
        }
    },
    watch: {
      '$route.query.search':{
        immediate: true,
        async handler (value) {
          this.songs = (await SongsService.index(value)).data
        }
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
