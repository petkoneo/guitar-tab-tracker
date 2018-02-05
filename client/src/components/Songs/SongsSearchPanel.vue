<template>
    <panel 
    title="Hladat">
    <v-text-field 
    label="Vyhladavanie podla skladby, interpreta, albumu alebo zanru"
    v-model="search">
    </v-text-field>
    </panel>
</template>

<script>
import _ from 'lodash'

export default {
    data () {
        return {
            search: ''
        }
    },
    watch: {
        search: _.debounce(async function (value) {
            const route = {
                name: 'songs'
            }
            if(this.search !== '') {
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        }, 1000),
        '$route.query.search': {
            immediate: true,
            handler(value) {
                this.search = value
            }
        }
    }
}
</script>

<style>

</style>
