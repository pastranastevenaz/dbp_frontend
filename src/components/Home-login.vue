<template>
  <center>
  <div class="homelogin">
    <p>homelogin</p>
    <!-- <form @submit.prevent="login({email,password})"> -->
      <input type="text" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
    <div class="action-buttons">
      <button type="submit" id="login-button" v-on:click="loginUser">Login</button>
      <button id="sign-up-button" v-on:click="">Sign-Up</button>
    </div>
    <!-- </form> -->
  </div>
</center>
</template>

<script>
// import home from '../containers/Home'
import { mapGetters, mapMutations } from 'vuex'

export default{
  name: 'homelogin',
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    methods: {
      ...mapMutations([
        'loginUser',
        'logoutUser'
      ])
    },
  },
}
</script>

<style scoped>
input{
  max-width: 70%;
}
.action-buttons{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#login-button{
  width: 25%;
}
#sign-up-button{
  width: 25%;
}
</style>
