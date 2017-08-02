<template>
  <div id="dns_component">
  <center>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>

          <v-container fluid>
            <v-layout row>
              <v-flex xs12>
                <form v-on:submit.prevent="">
                  <v-text-field v-on:keyup.native="submitdns" name="dns-input" id="dns-input" label="Domain or IP Address" v-model="ip_entered"></v-text-field>
                   <v-btn block secondary dark v-on:click.native="enterdns">DNS Lookup</v-btn>
                </form>


              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row>

              <!-- <center> -->
              <v-card id="dns-card" class="grey lighten-4 elevation-1">
                <br>
                <p id="dns-card-title">DNS Results For: <span>{{ ip_entered }}</span></p>
                <!-- A RECORDS -->
                <div v-if="dnsinfoA.length > 0">
                  <p class="dns-card-subheading"><u>@ Records</u></p>
                  <p v-for="info in dnsinfoA">
                    <v-layout row>
                    <v-flex xs2><strong>Name:</strong> {{ info.name }}</v-flex>
                    <v-flex xs2><strong>TTL:</strong> {{ info.ttl }}</v-flex>
                    <v-flex xs2><strong>Type:</strong> {{ info.type }}</v-flex>
                    <v-flex xs6><span id="dnsvalue"><strong>Value:</strong> {{ info.value }}</span></v-flex>
                  </v-layout>
                  </p>
                  <v-divider></v-divider>
                </div>
                <!-- AAAA RECORDS -->
                <div v-if="dnsinfoAAAA.length > 0">
                  <p class="dns-card-subheading"><u>AAAA Records</u></p>
                  <p v-for="infoaaaa in dnsinfoAAAA">
                    <v-layout row>
                    <v-flex xs2><strong>Name:</strong> {{ infoaaaa.name }}</v-flex>
                    <v-flex xs2><strong>TTL:</strong> {{ infoaaaa.ttl }}</v-flex>
                    <v-flex xs2><strong>Type:</strong> {{ infoaaaa.type }}</v-flex>
                    <v-flex xs6><span id="dnsvalue"><strong>Value:</strong> {{ infoaaaa.value }}</span></v-flex>
                  </v-layout>
                  </p>
                  <v-divider></v-divider>
                </div>
                <!-- MX RECORDS -->
                <div v-if="dnsinfoMX.length > 0">
                  <p class="dns-card-subheading"><u>MX Records</u></p>
                  <p v-for="infomx in dnsinfoMX">
                    <v-layout row>
                    <v-flex xs2><strong>Name:</strong> {{ infomx.name }}</v-flex>
                    <v-flex xs2><strong>TTL:</strong> {{ infomx.ttl }}</v-flex>
                    <v-flex xs2><strong>Type:</strong> {{ infomx.type }}</v-flex>
                    <v-flex xs6><span id="dnsvalue"><strong>Value:</strong> {{ infomx.value }}</span></v-flex>
                  </v-layout>
                  </p>
                  <v-divider></v-divider>
                </div>
                <!-- CNAME RECORDS -->
                <div v-if="dnsinfoC.length > 0">
                  <p class="dns-card-subheading"><u>CNAME Records</u></p>
                  <p v-for="infoc in dnsinfoC">
                    <v-layout row>
                    <v-flex xs2><strong>Name:</strong> {{ infoc.name }}</v-flex>
                    <v-flex xs2><strong>TTL:</strong> {{ infoc.ttl }}</v-flex>
                    <v-flex xs2><strong>Type:</strong> {{ infoc.type }}</v-flex>
                    <v-flex xs6><span id="dnsvalue"><strong>Value:</strong> {{ infoc.value }}</span></v-flex>
                  </v-layout>
                  </p>
                  <v-divider></v-divider>
                </div>
                <!-- SOA RECORDS -->
                <div v-if="dnsinfoSOA.length > 0">
                  <p class="dns-card-subheading"><u>SOA Records</u></p>
                  <p v-for="infosoa in dnsinfoSOA">
                    <v-layout row>
                    <v-flex xs2><strong>Name:</strong> {{ infosoa.name }}</v-flex>
                    <v-flex xs2><strong>TTL:</strong> {{ infosoa.ttl }}</v-flex>
                    <v-flex xs2><strong>Type:</strong> {{ infosoa.type }}</v-flex>
                    <v-flex xs6><span id="dnsvalue"><strong>Value:</strong> {{ infosoa.value }}</span></v-flex>
                  </v-layout>
                  </p>
                  <v-divider></v-divider>
                </div>
                <!-- TXT RECORDS -->
                <div v-if="dnsinfoTXT.length > 0">
                  <p class="dns-card-subheading"><u>TXT Records</u></p>
                  <p v-for="infotxt in dnsinfoTXT">
                    <v-layout row>
                    <v-flex xs2><strong>Name:</strong> {{ infotxt.name }}</v-flex>
                    <v-flex xs2><strong>TTL:</strong> {{ infotxt.ttl }}</v-flex>
                    <v-flex xs2><strong>Type:</strong> {{ infotxt.type }}</v-flex>
                    <v-flex xs6><span id="dnsvalue"><strong>Value:</strong> {{ infotxt.value }}</span></v-flex>
                  </v-layout>
                  </p>
                  <v-divider></v-divider>
                </div>
                <!-- NS RECORDS -->
                <div v-if="dnsinfoNS.length > 0">
                  <p class="dns-card-subheading"><u>Name Servers</u></p>
                  <p v-for="infons in dnsinfoNS">
                    <v-layout row>
                    <v-flex xs2><strong>Name:</strong> {{ infons.name }}</v-flex>
                    <v-flex xs2><strong>TTL:</strong> {{ infons.ttl }}</v-flex>
                    <v-flex xs2><strong>Type:</strong> {{ infons.type }}</v-flex>
                    <v-flex xs6><span id="dnsvalue"><strong>Value:</strong> {{ infons.value }}</span></v-flex>
                  </v-layout>
                  </p>
                  <v-divider></v-divider>
                </div>
              </v-card>
              <!-- </center> -->
            </v-layout>
            <!-- <v-divider v-if="index + 1 < items.length"></v-divider> -->
          </v-container>


        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </center>
</div>
</template>

<script>
import axios from 'axios'

// let url= 'https://crossorigin.me/http://api.hackertarget.com/dnslookup/?q=stevenanton.io'

let aurl = 'https://crossorigin.me/http://dns-api.org/A/'
let aaaaurl = 'https://crossorigin.me/http://dns-api.org/AAAA/'
let mxurl = 'https://crossorigin.me/http://dns-api.org/MX/'
let curl = 'https://crossorigin.me/http://dns-api.org/CNAME/'
let soaurl = 'https://crossorigin.me/http://dns-api.org/SOA/'
let txturl = 'https://crossorigin.me/http://dns-api.org/TXT/'
let nsurl = 'https://crossorigin.me/http://dns-api.org/NS/'

// let tempurl = 'https://crossorigin.me/http://dns-api.org/NS/'+ip_entered;


export default{
  name: 'dns',
  data(){
    return{
      ip_entered: "",
      dnsinfoA:[],
      dnsinfoAAAA: [],
      dnsinfoC: [],
      dnsinfoSOA: [],
      dnsinfoTXT: [],
      dnsinfoMX: [],
      dnsinfoNS: []
    }
  },



  methods:{
    submitdns: function(e){
      e.preventDefault();
      if (e.keyCode === 13) {
        let tempend;
        tempend = this.ip_entered;


        //@ RECORD http request

        axios.get(aurl+tempend)
        .then(response => {
          console.log(response.data);
          this.dnsinfoA = response.data
        })
        .catch(error => {
          console.log(error);
        });

        //AAAA RECORD http request

        axios.get(aaaaurl+tempend)
        .then(response => {
          console.log(response.data);
          this.dnsinfoAAAA = response.data
        })
        .catch(error => {
          console.log(error);
        });

        //CNAME RECORD http request

        axios.get(curl+tempend)
        .then(response => {
          console.log(response.data);
          this.dnsinfoC = response.data
        })
        .catch(error => {
          console.log(error);
        });

        //MX RECORD http request

        axios.get(mxurl+tempend)
        .then(response => {
          console.log(response.data);
          this.dnsinfoMX = response.data
        })
        .catch(error => {
          console.log(error);
        });

        //SOA RECORD http request

        axios.get(soaurl+tempend)
        .then(response => {
          console.log(response.data);
          this.dnsinfoSOA = response.data
        })
        .catch(error => {
          console.log(error);
        });

        //TXT RECORD http request

        axios.get(txturl+tempend)
        .then(response => {
          console.log(response.data);
          this.dnsinfoTXT = response.data
        })
        .catch(error => {
          console.log(error);
        });

        //NS RECORD http request

        axios.get(nsurl+tempend)
        .then(response => {
          console.log(response.data);
          this.dnsinfoNS = response.data
        })
        .catch(error => {
          console.log(error);
        });
        //////////////////////////

      }
    },


    enterdns: function(e){
      e.preventDefault();
      let tempend;
      tempend = this.ip_entered;


      //@ RECORD http request

      axios.get(aurl+tempend)
      .then(response => {
        console.log(response.data);
        this.dnsinfoA = response.data
      })
      .catch(error => {
        console.log(error);
      });

      //AAAA RECORD http request

      axios.get(aaaaurl+tempend)
      .then(response => {
        console.log(response.data);
        this.dnsinfoAAAA = response.data
      })
      .catch(error => {
        console.log(error);
      });

      //CNAME RECORD http request

      axios.get(curl+tempend)
      .then(response => {
        console.log(response.data);
        this.dnsinfoC = response.data
      })
      .catch(error => {
        console.log(error);
      });

      // MX RECORD http request

      axios.get(mxurl+tempend)
      .then(response => {
        console.log(response.data);
        this.dnsinfoMX = response.data
      })
      .catch(error => {
        console.log(error);
      });

      //SOA RECORD http request

      axios.get(soaurl+tempend)
      .then(response => {
        console.log(response.data);
        this.dnsinfoSOA = response.data
      })
      .catch(error => {
        console.log(error);
      });

      //TXT RECORD http request

      axios.get(txturl+tempend)
      .then(response => {
        console.log(response.data);
        this.dnsinfoTXT = response.data
      })
      .catch(error => {
        console.log(error);
      });

      //NS RECORD http request

      axios.get(nsurl+tempend)
      .then(response => {
        console.log(response.data);
        this.dnsinfoNS = response.data
      })
      .catch(error => {
        console.log(error);
      });

      //////////////////////////
  
    }
  },

  // Lifecycle hooks
  beforeCreate(){

  },
  created(){

  },

}
</script>

<style scoped>
#dns_component{
  /*border-style: solid;*/
  height: 82vh;
}
#dns-card{
  width: 100%;
  min-height: 50vh;
}
#dns-card-title{
  color: #555;
  font-size: 1.5em;
}
#dns-input{
  border-style: inset;
  border-radius: 7px;
  width: 100%;
  min-height: 35px;
  text-decoration: none;
}
.dns-card-subheading{
  color: #666;
  font-size: 1.1em;
}
#dnsvalue{
  float:left;
}

</style>
