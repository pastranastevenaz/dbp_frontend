<template>
  <div id="review_component">
  <center>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          This is the review component
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </center>
</div>
</template>

<script>
export default{
  name: 'review',
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
#review_component{
  /*border-style: solid;*/
  height: 82vh;
}
</style>
