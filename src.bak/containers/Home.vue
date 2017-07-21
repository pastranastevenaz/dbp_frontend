<!-- <component v-bind:is="home-login"></component> -->
<template>
  <center>
  <div class="home">
    <div id="app">
      <div v-if="!isAuthenticated">
        <homelogin></homelogin>
      </div>
      <div v-else>
        <homelogout></homelogout>
      </div>
    </div>
  </div>
</center>
</template>

<script>

import homelogin from '../components/Home-login'
import homelogout from '../components/Home-logout'
import { mapGetters, mapMutations } from 'vuex'

export default{
  name: 'home',
  components:{
    'homelogin': homelogin,
    'homelogout': homelogout
  },
  data(){
    return{
      // authenticated: false,
      // component: 'homelogin'
    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  methods: {
    ...mapMutations([
      'loginUser',
      'logoutUser'
    ])
  },
  // Lifecycle hooks
  beforeCreate(){
    alert('Home.vue | beforeCreate()')
  },
  created(){
    alert('Home.vue | created() | Get data if logged in')
  }
}
</script>

<style scoped>
.home{
  border-style: dashed;
  min-width: 100%;
  height: 95vh;
}
</style>
