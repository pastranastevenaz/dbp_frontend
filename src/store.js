import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    view: 'home'
  }.
  getters:{
    isHome: state =>{
      return state.view
    },
    isDns: state=>{
      return state.view
    },
    // The rest of the views go here
    isException: state=>{
      retrun state.view
    }
  },
  mutations:{
    toHome(state){
      view = 'home';
    },
    toDns(state){
      view = 'dns'
    },
    // The rest of the mutations for
    // views go here
    toException(state){
      view = 'exception'
    }
  }
})
export default store
