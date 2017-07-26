<template>
  <div id="previous_notes_component">
  <center>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          This is the previous notes container
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </center>
</div>
</template>

<script>
export default{
  name: 'previous_notes',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
#previous_notes_component{
  /*border-style: solid;*/
  height: 82vh;
}
</style>
