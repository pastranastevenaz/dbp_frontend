<template>
  <div id="home_component">
  <center>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <img src="../../public/tbp150.png" alt="bp" class="mb-5" />
          <blockquote>
            <p>Teamname by Proxy</p>
          </blockquote>

         
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </center>
</div>
</template>

<script>
export default{
  name: 'home',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
#home_component{
  /*border-style: solid;*/
  height: 82vh;
}
</style>
