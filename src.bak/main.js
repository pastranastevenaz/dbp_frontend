// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import navbar from './components/Navbar'
import router from './router'
import home from './containers/Home'
import exception from './containers/Exception'

// import ComponentName from './path/to/Component'
Vue.component('Exception', exception);
Vue.component('Home', home);

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
  components: {
    navbar,
    home,
    exception
  },
  // el: '#app',
  // template: '<App/>',
  // components: { App }
}).$mount('#app')
