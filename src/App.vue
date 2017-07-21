<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
    >
    <br>
    <center><h5>WorkFlow</h5></center>
    <hr/>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          value="true"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <hr><br><center><h5>Tools & etc</h5></center><hr>



    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-btn
        icon
        @click.native.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        @click.native.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.native.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>


      <v-dialog v-model="dialog" lazy absolute>
        <v-icon slot="activator">info</v-icon>
      <!-- <v-btn primary dark slot="activator">Open Dialog</v-btn> -->
      <v-card>
        <v-card-title>
          <div class="headline">App info</div>
        </v-card-title>
        <v-card-text>This Application is buit with VueJS, AWS Lambda and lots of love. It's built and maintained by Team Name by Proxy!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn> -->
          <v-btn class="blue--text darken-1" flat="flat" @click.native="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    </v-toolbar>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <!-- <img src="/public/v.png" alt="Vuetify.js" class="mb-5" /> -->
            <blockquote>
              <p>Teamname by Proxy</p>
              <!-- &#8220;First, solve the problem. Then, write the code.&#8221;
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer> -->
            </blockquote>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </main>

    <v-footer :fixed="fixed">
      <span>&copy;{{ new Date().getFullYear() }} Teamname by Proxy</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        test: true,
        clipped: !false,
        drawer: false,
        fixed: !false,
        current_page: null,
        items: [
          { icon: 'code', title: 'DNS' },
          { icon: 'error_outline', title: 'Duplicate' },
          { icon: 'youtube_searched_for', title: 'Review Error' },
          { icon: 'build', title: 'Troubleshooting' },
          { icon: 'speaker_notes', title: 'Previous Notes'},
          { icon: 'home', title: 'Internal Tools'},
          { icon: 'content_copy', title: 'Check for Similar Issues' },
          { icon: 'public', title: 'External Tools'},
          { icon: 'announcement', title: 'Known Issues'},
          { icon: 'question_answer', title: 'Review'},
        ],
        tools: [
          { icon: '', title: 'Exceptions' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Teamname By Proxy'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
