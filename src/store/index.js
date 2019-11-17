import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import common from './common'
import portfolio from './portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user, common, portfolio
  }
})
