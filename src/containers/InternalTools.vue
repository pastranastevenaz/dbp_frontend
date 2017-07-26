<template>
  <div id="internal_tools_component">
  <center>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          This is the Internal Tools component
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </center>
</div>
</template>

<script>
export default{
  name: 'internal_tools',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
#internal_tools_component{
  /*border-style: solid;*/
  height: 82vh;
}
</style>
