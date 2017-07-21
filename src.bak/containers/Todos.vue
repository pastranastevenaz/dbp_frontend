<template>
  <div>
    <center><p>To Do</p></center>
    
    <ol>
      <li v-for="todo in todos"><p>{{ todo.title }} <span id="status">Finished: {{ todo.completed }}</span></p></li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return{
      todos: []
    }
  },
  methods: {

  },
  // Lifecycle hooks
  beforeCreate(){
    alert('before create')
  },
  created(){
    alert('created')
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      this.todos = response.data
    })
    .catch(error => {
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
#status{
  float: right;
}
</style>
