<template>
  <div>
    <center><h4>Customers</h4></center><br>
    <ul>
      <li v-for="customer in customers">
        {{ customer.name }}<span id="email">{{ customer.email }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  props: {

  },
  data(){
    return{
      customers: []
    }
  },
  methods: {

  },
  // LifeCylce Hooks
  beforeCreate(){
    alert('beforeCreate')
  },
  created(){
    // Fetch Data here
    alert('created')
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response =>{
        this.customers = response.data
      })
      // .then(function (response) {
      //   this.customers = response
      //   console.log(customer);
      // })
      .catch(function (error) {
        console.log(error);
      });


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
#email{
  float: right;
}
</style>
