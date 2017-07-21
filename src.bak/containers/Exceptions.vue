<template>
  <div>
    <center><h2>Teamname By Proxy</h2></center>
    <center><h4>Exceptions</h4></center>

    <!-- <center> -->

  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate">
          <label for="name">Name</label>
        </div>
        <div class="input-field col s6">
          <input id="supervisor" type="text" class="validate">
          <label for="last_name">Supervisor</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6"><br>
          <input id="approved_by" type="text" class="validate">
          <label for="disabled">Approved by</label>
        </div>
        <div class="input-field col s6">
          <label for="date">Date</label><br>
          <input id="date" type="date" class="datepicker">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <label for="start_time">Start Time</label><br>
          <input id="start_time" placeholder="12:00" type="time" class="timepicker">
        </div>
        <div class="input-field col s6">
          <label for="end_time">End Time</label><br>
          <input id="end_time" placeholder="12:00" type="time" class="timepicker">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <label for="reason">Reason</label><br>
          <input id="reason" placeholder="describe the reason for the exception request" class="materialize-textarea validate" data-length="300">
        </div>
      </div>
    </form>
  </div>
    <!-- </center> -->


  </div>
</template>

<script>
import axios from 'axios';
export default{
  data(){
    return{
      albums: []
    }
  },
  method: {

  },
  // Lifecycle Hooks
  beforeCreate(){
    alert('beforeCreate()')
  },
  created(){
    alert('created()')
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(response =>{
      this.albums = response.data
    })
    .catch(error =>{
      console.log(error);
    })
  },
  beforeMount(){
    // alert('beforeMount')
  },
  mounted(){
    // Manipulate mount here

  },
  beforeUpdate(){

  },
  updated(){

  }
}
</script>

<style scoped>

</style>
