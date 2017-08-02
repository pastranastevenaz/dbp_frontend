<template>
  <div id="mailer_component">
    <center>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <form v-on:submit="submitForm">
              <div>
                <label for="yourname">Your Name</label>
                <input type="text" id="yourname" name="yourname" v-model="yourname">
              </div>
              <div>
                <label for="youremail">Your E-mail</label>
                <input type="email" id="youremail" name="emaiyouremaill" v-model="youremail">
              </div>
              <div>
                <label for="yoursupervisor">Your Supervisor</label>
                <input type="text" id="yoursupervisor" name="yoursupervisor" v-model="yoursupervisor">
              </div>
              <div>
                <label for="approvedby">Approved By</label>
                <input type="text" id="approvedby" name="approvedby" v-model="approvedby">
              </div>
              <div>
                <label for="exceptiondate">Date</label>
                <input type="date" id="exceptiondate" name="exceptiondate" v-model="exceptiondate">
              </div>
              <div>
                <label for="starttime">Start Time</label>
                <input type="time" id="starttime" name="starttime" v-model="starttime">
              </div>
              <div>
                <label for="endtime">End Time</label>
                <input type="time" id="endtime" name="endtime" v-model="endtime">
              </div>
              <div>
                <label for="Reason">Reason</label>
                <input type="text" id="reason" name="reason" v-model="reason">
              </div>

              <div><button type="submit">Submit</button></div>
            </form>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </center>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  name: 'mailer',
  data(){
    return{
      exception: {},
      yourname: '',
      youremail: '',
      yoursupervisor: '',
      approvedby:'',
      exceptiondate: '',
      starttime: '',
      endtime: '',
      reason: ''
    }
  },
  computed: {
    // isValid: function () {
    //   return this.name != '' && this.email != ''
    // }
  },
  methods: {
    submitForm(e){
      e.preventDefault();
      // if(!this.form.yourname || !this.form.yoursupervisor){
      //   console.log('You must fill in the form')
      // } else {
        console.log('called submitForm')
        let newException = {
          name: this.exception.yourname,
          agentemail: this.exception.youremail,
          supervisor: this.exception.yoursupervisor,
          date: this.exception.exceptiondate,
          starttime: this.exception.starttime,
          endtime: this.exception.endtime,
          reason: this.exception.reason
        }

        axios.post('http://127.0.0.1:5000/exception', newException)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });


        // this.$http.post('http://127.0.0.1:5000/exception', newException)
        // .then(function(response){
        //   console.log(response.body);
        // })
        // .catch(function(error){
        //   console.log(error)
        // });
        // e.preventDefault();
    }
  }

}
</script>

<style scoped>
#mailer_component{
  border-style: solid;
  height: 82vh;
}
input{
  border-style: inset;
}
button{
  border-style: groove;
}
</style>







// console.log(
//   'submited Name: '+ this.form.yourname +
//   ', Email: ' + this.form.youremail +
//   ', Supervisor: ' + this.form.yoursupervisor +
//   ', Date: ' + this.form.exceptiondate +
//   ', Start Time: ' + this.form.starttime +
//   ', End Time: ' + this.form.endtime +
//   ', Reason: ' + this.form.reason)


//
// this.yourname = '',
// this.youremail = '',
// this.yoursupervisor = '',
// this.exceptiondate ='',
// this.starttime='',
// this.endtime = '',
// this.reason = ''











// axios.post('https://9374efz9mk.execute-api.us-west-1.amazonaws.com/dev/hello', {
  // name: 'steven'
  // agentemail: this.youremail,
  // supervisor: this.yoursupervisor,
  // date: this.exceptiondate,
  // starttime: this.starttime,
  // endtime: this.endtime,
  // reason: this.reason
  // })
  // .then(function (response){
    //   console.log(response.body);
    // })
    // .catch(function (error){
      //   console.log(error);
      // });
