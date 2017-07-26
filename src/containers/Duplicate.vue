<template>
  <div id="duplicate_component">
  <center>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          This is the Duplicate component
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </center>
</div>
</template>

<script>
export default{
  name: 'duplicate',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
#duplicate_component{
  /*border-style: solid;*/
  height: 82vh;
}
</style>
