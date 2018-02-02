<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
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

            <div v-for="song in songs"
            :key="songs.id">
            {{song.title}} -
            {{song.artist}} -
            {{song.album}} -
            </div>
        </panel>
    </v-flex>
  </v-layout>

</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
    components: {
        Panel
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

</style>
