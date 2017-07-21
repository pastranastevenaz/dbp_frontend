import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.use(Router)

import home from './containers/Home'
import albums from './containers/Albums'
import customers from './containers/Customers'
import todos from './containers/Todos'
import exceptions from './containers/Exceptions'

// The Routes
const routes = [
  {path: '/', component: home},
  {path: '/exceptions', component: exceptions},
  {path: '/albums', component: albums},
  {path: '/customers', component: customers},
  {path: '/todos', component: todos}
]

//Export the router
export default new Router({mode: 'history', routes, linkActiveClass: 'active'})
