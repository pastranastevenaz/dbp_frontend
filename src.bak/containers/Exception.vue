<templete>
  <div id="exception">
    <center><h1>Teamname By Proxy</h1></center>
    <center>

    </center>
  </div>
</templete>

<script>
  export default{
    name: 'exception',
    components:{

    },
    data(){
      return{

      }
    },
    computed: {

    },
    methods: {

    },
    // LIFECYCLE HOOKS
    beforeCreate(){
      alert('created Exception')
    },
    created(){

    }
  }
</script>

<style scoped>
  #exception{
    border-style: dashed;
    min-width: 100%;
    height: 95vh;
    float: right;
  }
</style>
