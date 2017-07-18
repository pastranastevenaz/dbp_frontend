import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './containers/Home'
import exception from './containers/Exception'

// THE ROUTES

const routes = [
  {path: '/', component: home},
  {path: '/exception', component: exception}
]

export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})
