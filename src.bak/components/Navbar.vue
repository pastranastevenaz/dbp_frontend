<template lang="html">
  <!-- <div class="navigation-bar"> -->
  <div class="navigation-bar">
    <router-link to="/">
      <div class="link-box">
        <i class="medium material-icons">home</i>
        <span class="link-text">Home</span>
      </div>
    </router-link>
    <router-link to="/exception">
      <div class="link-box">
        <i class="medium material-icons">perm_media</i>
        <span class="link-text">Exception</span>
      </div>
    </router-link>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
i{
  color: #444;
}
.navigation-bar{
  display: flex;
  flex-direction: column;
  border-style: solid;
  width: 20em;
  height: 100vh;
  position: fixed;
}
.link-box{
  display: flex;
  border-style: groove;
  padding-left: 1em;
  padding-top: 1em;
  padding-bottom: .5em;
}
.link-text{
  /*margin-left: 1em;*/
  font-size: 2em;
  color: #444;
  margin-left: .6em;
}
</style>
