<template>
<div>
    <v-layout>
        <v-flex xs6>
            <panel title="Vybrana skladba">
                <v-layout>
                <v-flex xs6>
              <div class="song-title">
                Skladba: {{song.title}}
              </div>
                  <div class="song-artist">
                   Interpret: {{song.artist}}
                  </div>
                  <div class="song-genre">
                  Zaner: {{song.genre}}
                  </div>
                  <v-btn
                      dar
                      class="cyan"
                      @click="navigateTo({
                      name: 'song-edit',
                      params: {
                          songId: song.id
                      }
                      })">
                      Upravit
                  </v-btn>
                
                </v-flex>
                <v-flex xs6>
                    <p> Meno albumu: {{song.album}}</p>
                <img class="album-image"
                     :src="song.albumImageUrl"/>
                </v-flex>
              </v-layout>
                </panel>
        </v-flex>
                <v-flex xs6 class='ml-4'>
        <panel title="Youtube">
        <youtube 
        :video-id="song.youtubeId"
        :player-width ='500'
        :player-height='400'>
        </youtube>
        </panel>
        </v-flex>


    </v-layout>
    <v-layout>
        <v-flex xs6>
        <panel title="Text skladby">
                <textarea
                readonly
                label="Text skladby"
                multi-line
                v-model="song.lyrics">
                </textarea>
        </panel>
        </v-flex>
                <v-flex xs6 class="ml-4">
            <panel title="Tabulatura">
                <textarea
                readonly
                label="Tabulatura skladby"
                multi-line
                v-model="song.tab">
                </textarea>
            </panel>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
    data(){
        return {
            song: {}
        }
    },

    async mounted(){
        const songId = this.$store.state.route.params.songId
        this.song = (await SongsService.show(songId)).data
    },
    components:{
        Panel
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
textarea{
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color:transparent;
    padding:40px;
    overflow: auto;
}
</style>
