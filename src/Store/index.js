import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './State'
import getters from './Getters'
import actions from './Actions'
import mutations from './Mutations'

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})