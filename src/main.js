import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
// import store from './store'

// Vue.component('home', home);

Vue.use(Vuetify)

Vue.config.productionTip - true

new Vue({
  el: '#app',
  render: h => h(App)
})
