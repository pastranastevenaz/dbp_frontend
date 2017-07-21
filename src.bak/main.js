import Vue from 'vue'
import navbar from './components/Navbar'
import router from './router'
import homelogin from './components/Home-login'
import homelogout from './components/Home-logout'
import store from './store/store'



import Vuetify from 'vuetify'

Vue.use(Vuetify)

// Global Registry
// example:
// import ComponentName from './path/to/Component'
// Vue.component('compnent-name', ComponentName);
// Vue.component('home-login', home-login);


Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  template: `
 <div style="display: flex">
    <navbar />
    <section class="section"
      style="
        width: 100%;
        margin-left:10%;
        ">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  store,
  components: {
    navbar,
    homelogin,
    homelogout
  },
}).$mount('#app')
