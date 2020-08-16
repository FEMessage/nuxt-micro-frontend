import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'vue-app'
  },
  mutations: {
    update(state, data) {
      Object.keys(data).forEach(key => {
        state[key] = data[key]
      })
    },
    /**
     * 更新主应用的 state
     * @param {state} _ 
     * @param {object} data 
     */
    updateParentState(_, data) {
      if (this.$sdk) {
        this.$sdk.setGlobalState(data)
      }
    }
  },
  actions: {},
  modules: {},
});
