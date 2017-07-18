import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      authenticated: false
    },
    getters: {
      isAuthenticated: state => {
        return state.authenticated
      }
    },
    mutations: {
      loginUser(state){
        authenticated = true;
      },
      logoutUser(state){
        authentiocated = false;
      }
    }
})
export default store
// const storage = (process.env.VUE_ENV === 'server') ? null : window.localStorage
// const LOGIN = "LOGIN";
// const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// const LOGOUT = "LOGOUT";

// const store = new Vuex.Store({
//   state: {
//     //   // State value pairs
//     isAuthenticated: !!localStorage.getItem('token')
//     // isAuthenticated: false
//   },
//   actions: {
//     // actions are functions that causes side effects and can involve
//     // // asynchronous operations.
//     login({commit}, creds){
//       commit(LOGIN);
//       return new Promise(resolve => {
//         setTimeout(() => {
//           localStorage.setItem('token', 'JWT');
//           commit(LOGIN_SUCCESS);
//           resolve();
//         }, 1000);
//       });
//     },
//     logout({commit}){
//       localStorage.removeItem('token');
//       commit(LOGOUT);
//     }
//   },
//   mutations: {
//     [LOGIN] (state){
//       state.pending =  true;
//     },
//     [LOGIN_SUCCESS] (state){
//       state.isAuthenticated = true;
//       state.pending = false;
//     },
//     [LOGOUT] (state){
//       state.isAuthenticated = false
//     }
//   },
//   getters: {
//     isAuthenticated: state => {
//       return state.isAuthenticated
//     }
//   },
//   modules: {
//
//   }
// })
// export default store

// root state object
// each Vuex instance is just a single state tree.
// const store = {
// }
//
// const mutations = {
//   //setters
// }
// const actions = {
// }
// const getters = {
//   //getters
// }
//
// export default new Vuex.Store({
//   state,
//   getters,
//   setters,
//   mutations
// })
