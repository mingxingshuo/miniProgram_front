import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	program:{}
  },
  mutations: {
  	setProgram(state,program){
  		state.program = program
  	}
  },
  actions: {
  	setProgram(context,program){
  		context.commit('setProgram',program)
  	}
  }
})
