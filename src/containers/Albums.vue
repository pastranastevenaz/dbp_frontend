<template>
  <div>
    <center><h4>Albums</h4></center>
    <ul>
      <li v-for="album in albums"><p>Title: {{ album.title }}</p></li>
    </ul>
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
    alert('beforeMount')
  },
  mounted(){
    // Manipulate mount here
    alert('mounted')
  },
  beforeUpdate(){
    alert('beforeUpdate')
  },
  updated(){
    alert('updated')
  }
}
</script>

<style scoped>

</style>
