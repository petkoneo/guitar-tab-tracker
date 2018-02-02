<template>
<v-layout>
<v-flex xs5>
    <panel title="Metaudaje skladby">
    <v-text-field
    label="Nazov"
    required
    :rules="[required]"
    v-model="song.title">
    </v-text-field>

    <v-text-field
    label="Autor"
    required
    :rules="[required]"
    v-model="song.artist">
    </v-text-field>

    <v-text-field
    label="Zaner"
    required
    :rules="[required]"
    v-model="song.genre">
    </v-text-field>

    <v-text-field
    label="Album"
    required
    :rules="[required]"
    v-model="song.album">
    </v-text-field>

    <v-text-field
    label="UTL fotky albumu"
    required
    :rules="[required]"
    v-model="song.albumImagerUrl">
    </v-text-field>

    <v-text-field
    label="Youtube ID"
    required
    :rules="[required]"
    v-model="song.youtubeId">
    </v-text-field>

    </panel>
</v-flex>
<v-flex xs8>
<panel title="Tabulatury a text" class="ml-4">

    <v-text-field
    label="Text skladby"
    multi-line
    required
    :rules="[required]"
    v-model="song.lyrics">
    </v-text-field>

    <v-text-field
    label="Tabulatura skladby"
    multi-line
    required
    :rules="[required]"
    v-model="song.tab">
    </v-text-field>
</panel>
<div class="danger-alert" v-if="error">
{{error}}
    </div>
    

<v-btn
dark
class="cyan"
@click="create"
>
Vytvorit skladbu
</v-btn>
</v-flex>

</v-layout>

</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
    data () {
        return {
            song:{
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
        },
        error: null,
        required:(value) => !!value || 'Povinne.'
        }
    },
    components: {
        Panel
    },
    methods: {
        async create() {
            this.error = null
    const areAllFieldsFilledIn =Object
    .keys(this.song)
    .every(key => !!this.song[key])
    if(!areAllFieldsFilledIn) {
        this.error = "Prosim vyplnte vsetky udaje."
        return
    }

            try {
                await SongsService.post(this.song)
                this.$router.push({
                    name:'songs'
                })
            } catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
