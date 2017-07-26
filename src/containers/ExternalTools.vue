<template>
  <div id="external_tools_component">
  <center>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          This is the External Tools Component
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </center>
</div>
</template>

<script>
export default{
  name: 'external_tools',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
#external_tools_component{
  /*border-style: solid;*/
  height: 82vh;
}
</style>
