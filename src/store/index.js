import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showmask: false,
    screenwidth: document.body.clientWidth,
  },
  mutations: {
    showMaskHandler(state) {
      if (state.showmask === true) {
        state.showmask = false;
      } else {
        state.showmask = true;
      }
    },
    closeMaskHandler(state) {
      state.showmask = false;
    },
  },
  actions: {
  },
  modules: {
  },
});
