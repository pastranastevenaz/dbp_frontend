<template>
  <center>
  <div class="homelogout">
    <p>Signed in as: User Name</p>
    <div class="action-buttons">
      <button id="logout-button" v-on:click="logout">Logout</button>
    </div>
  </div>
</center>
</template>

<script>
export default {
  name: 'homelogout',
  methods:{
    logout(){
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>
#logout-button{
  width: 25%;
}
</style>
