import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	name: '',
  	email: '',
  },
  mutations: {
  	initName (state, name) {
  		state.name = name;
  	}
  },
  actions: {

  }
})
