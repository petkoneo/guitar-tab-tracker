<template>
  <div>
    <h1>Register</h1>

    <input type="email"
           name="email"
           placeholder="Email"
           v-model="email"/>
    <br>
    <input type="password"
           name="password"
           placeholder="Heslo"
           v-model="password"/>
    <br>
    <button
    @click="register"
    >Registrácia</button>
  </div>
</template>

<script>
  import AuthenticationService from "@/services/AuthenticationService"
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: "",
      password: ""
    }
  },
  methods:{
    async register(){
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    console.log(response.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
