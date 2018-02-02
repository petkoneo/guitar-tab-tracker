<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Registracia">
          <form
          name="guitar-tab-tracker-form"
          autocomplete ="off">
          <v-text-field
            name="input-1"
            label="Email"
            v-model="email"
          >
          </v-text-field>
          <v-text-field
            name="input-1"
            label="Heslo"
            type="password"
            v-model="password"
            autocomplete ="new-password"
          >
          </v-text-field>
          </form>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <div class="error" v-html="error"></div>
          <br>
          <v-btn dark class="cyan"
                 @click="register"
          >Registrácia
          </v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }

</style>
