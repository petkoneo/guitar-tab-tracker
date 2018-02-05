<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Prihlasenie">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            name="input-1"
            label="Email"
            v-model="email"
          >
          </v-text-field>
          <v-text-field
            name="input-1"
            label="Heslo"
            v-model="password"
            :append-icon="e3 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e3 = !e3)"
              value="wqfasds"
              type="password"
              class="input-group--focused"
              :type="e3 ? 'password' : 'text'"
          >
          </v-text-field>

          <div class="error" v-html="error"></div>
          <br>
          <v-btn dark class="cyan"
                 @click="login"
          >Prihlasenie
          </v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }

</style>
