<keep-alive>
<template>
  <div id="exception_component">
  <center>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <v-card id="exception_card" class="grey lighten-4 elevation-0">
            <v-card-text>
              <v-container fluid>

                <v-layout row>
                  <v-flex xs6>
                    <v-text-field name="name-input" label="Your Name" id="nameInput"></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      v-bind:items="items"
                      v-model="e1"
                      label="Your Supervisor"
                      single-line
                      bottom
                      ></v-select>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs6>
                    <v-text-field name="name-input" label="s" id="nameInput"></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field name="name-input" label="Your Supervisor" id="nameInput"></v-text-field>
                  </v-flex>
                </v-layout>

              </v-container>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </center>
</div>
</template>
</keep-alive>

<script>
export default{
  name: 'exception',
  data () {
      return {
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        items: [
          { text: 'Tyler Johnsey' },
          { text: 'Steven Wahl' },
          { text: 'Supervisor 3' },
          { text: 'Supervisor 4' },
          { text: 'Supervisor 5' },
          { text: 'Supervisor 6' },
          { text: 'Supervisor 7' },
          { text: 'Other | Enter name in comments'}
        ],
      }
    },
  methods:{

  }
}
</script>

<style scoped>
#exception_card{
  width: 70%;
}
#exception_component{
  /*border-style: solid;*/
  height: 82vh;
}
</style>
