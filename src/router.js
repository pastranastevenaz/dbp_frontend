import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// IMPORT THE ROUTES
import home from './containers/Home'
import dns from './containers/Dns'
import duplicate from './containers/Duplicate'
import review from './containers/Review'
import troubleshooting from './containers/Troubleshooting'
import previous_notes from './containers/PreviousNotes'
import internal_tools from './containers/InternalTools'
import similar_issues from './containers/SimilarIssues'
import external_tools from './containers/ExternalTools'
import known_issues from './containers/KnownIssues'
// ..
import exception from './containers/Exception'
import mailer from './containers/Mailer'

// THE ROUTES
const routes = [
  {path: '/', component: home},
  {path: '/dns', component: dns},
  {path: '/duplicate', component: duplicate},
  {path: '/review', component: review},
  {path: '/troubleshooting', component: troubleshooting},
  {path: '/previous_notes', component: previous_notes},
  {path: '/internal_tools', component: internal_tools},
  {path: '/similar_issues', component: similar_issues},
  {path: '/external_tools', component: external_tools},
  {path: '/known_issues', component: known_issues},
  {path: '/review', component: review},
  {path: '/exception', component: exception},
  {path: '/mailer', component: mailer}
]

export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})
