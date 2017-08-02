<template>
  <div id="exception_component">
  <center>
    <h4 id="title">Exceptions</h4>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <v-card id="exception_card" class="grey lighten-4 elevation-0">
            <v-card-text>
              <v-container fluid>
                <!-- TOP ROW -->
                <v-layout row>

                  <!-- YOUR NAME -->
                  <v-flex xs6>
                    <v-text-field name="name-input" label="Your Name" id="nameInput"></v-text-field>
                  </v-flex>

                  <!-- SUPERVISOR -->
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

                <!-- SECOND ROW -->
                <v-layout row>

                  <!-- APPROVED BY -->
                  <v-flex xs6>
                    <v-text-field name="name-input" label="Approved By" id="nameInput"></v-text-field>
                  </v-flex>

                  <!-- EXCEPTION DATE -->
                  <v-flex xs6>
                    <v-menu
                      lazy
                      :close-on-content-click="false"
                      v-model="menu"
                      transition="scale-transition"
                      offset-y
                      full-width
                      :nudge-left="40"
                      max-width="290px"
                      >
                      <v-text-field
                        slot="activator"
                        label="Date of Exception"
                        v-model="e2"
                        prepend-icon="event"
                        readonly
                        ></v-text-field>
                        <v-date-picker v-model="e2" no-title scrollable actions>
                          <template scope="{ save, cancel }">
                            <v-card-actions>
                              <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                              <v-btn flat primary @click.native="save()">Save</v-btn>
                            </v-card-actions>
                          </template>
                        </v-date-picker>
                      </v-menu>
                  </v-flex>
                </v-layout>

                <!-- ROW 3 -->
                <v-layout row>

                  <!-- START TIME -->
                  <v-flex xs6>
                    <v-menu
                      lazy
                      :close-on-content-click="false"
                      v-model="menu3"
                        transition="scale-transition"
                        offset-y
                        :nudge-left="40"
                        >
                        <v-text-field
                          slot="activator"
                          label="Start Time"
                          v-model="e3"
                          prepend-icon="access_time"
                          readonly
                          ></v-text-field>
                          <v-time-picker v-model="e3" autosave></v-time-picker>
                        </v-menu>
                  </v-flex>

                  <!-- END TIME -->
                  <v-flex xs6>
                    <v-menu
                      lazy
                      :close-on-content-click="false"
                      v-model="menu4"
                        transition="scale-transition"
                        offset-y
                        :nudge-left="40"
                        >
                        <v-text-field
                          slot="activator"
                          label="End Time"
                          v-model="e4"
                          prepend-icon="access_time"
                          readonly
                          ></v-text-field>
                          <v-time-picker v-model="e4" autosave></v-time-picker>
                        </v-menu>
                  </v-flex>
                </v-layout>

                <!-- ROW 4 -->
                <v-layout row>

                  <!-- REASON  -->
                  <v-flex xs12>
                    <v-text-field
                      name="input-1"
                      label="Reason - Comments"
                      textarea
                      ></v-text-field>
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

<script>
export default{
  name: 'exception',
  data () {
      return {
        // Your Name
        picker: null,
        e1: null,
        e2: null,
        menu: false,
        modal: false,
        e3: null,
        menu3: false,
        e4: null,
        menu4: false,
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
#title{
  color: #555;
}
#exception_card{
  width: 70%;
}
#exception_component{
  /*border-style: solid;*/
}
</style>
