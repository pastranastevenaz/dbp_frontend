<template>
  <div id="troubleshooting_component">
  <center>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          This is the troubleshooting component
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </center>
</div>
</template>

<script>
export default{
  name: 'troubleshooting',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
#troubleshooting_component{
  /*border-style: solid;*/
  height: 82vh;
}
</style>
