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
    <!-- THE TOP LINKS IN THE NAV BAR -->
    <!-- ================================ -->
      <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            value="true"
          >
            <router-link :to="{ path: item.urllink }">
              <v-list-tile-action>
                <v-icon light v-html="item.icon"></v-icon>
              </v-list-tile-action>
            </router-link>

            <router-link :to="{ path: item.urllink }">
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </router-link>

          </v-list-tile>
      </v-list>
      <!-- =================================== -->

      <hr><br><center><h5>Tools & etc</h5></center><hr>
      <!-- THE Bottom LINKS IN THE NAV BAR -->
      <!-- ================================ -->
        <v-list>
            <v-list-tile
              v-for="(tool, t) in tools"
              :key="t"
              value="true"
            >
              <router-link :to="{ path: tool.urllink }">
                <v-list-tile-action>
                  <v-icon light v-html="tool.icon"></v-icon>
                </v-list-tile-action>
              </router-link>

              <router-link :to="{ path: tool.urllink }">
                <v-list-tile-content>
                  <v-list-tile-title v-text="tool.title"></v-list-tile-title>
                </v-list-tile-content>
              </router-link>

            </v-list-tile>
        </v-list>
        <!-- =================================== -->

    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>

      <router-link :to="{path: '/'}">
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </router-link>
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
      <router-view></router-view>
    </main>

    <v-footer :fixed="fixed">
      <span>&copy;{{ new Date().getFullYear() }} Teamname by Proxy</span>
    </v-footer>
  </v-app>
</template>

<script>
import router from './router'
// import { mapGetters, mapMutations } from 'vuex'

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
          { icon: 'code', title: 'DNS', urllink: 'dns' },
          { icon: 'error_outline', title: 'Duplicate', urllink: 'duplicate' },
          { icon: 'youtube_searched_for', title: 'Review Error', urllink: 'review' },
          { icon: 'build', title: 'Troubleshooting', urllink: 'troubleshooting' },
          { icon: 'speaker_notes', title: 'Previous Notes', urllink: 'previous_notes'},
          { icon: 'home', title: 'Internal Tools', urllink: 'internal_tools'},
          { icon: 'content_copy', title: 'Check for Similar Issues', urllink: 'similar_issues' },
          { icon: 'public', title: 'External Tools', urllink: 'external_tools'},
          { icon: 'announcement', title: 'Known Issues', urllink: 'known_issues' },
          { icon: 'question_answer', title: 'Review', urllink: 'review'},
        ],
        tools: [
          { icon: 'note_add', title: 'Exceptions', urllink: 'exception' },
          { icon: 'note_add', title: 'Exceptions2', urllink: 'mailer' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Teamname By Proxy'
      }
    },
    router
  }
</script>

<style lang="stylus">
a{
  text-decoration: none;
  color: #555 !important;
}
a:active{
  color: #555;
}
a:hover{
  color: #888 !important;
}
  @import './stylus/main'
</style>
