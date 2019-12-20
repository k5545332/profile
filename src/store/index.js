import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showmask: false,
    screenwidth: document.body.clientWidth,
    user: {
      name: 'username',
      number: '14',
      maxhp: 50,
      hp: 50,
    },
    day: 1,
    status: true,
  },
  mutations: {
    dayPlus(state) {
      state.day += 1;
    },
    attack(state) {
      state.user.hp -= 5;
    },
    checkInfo(state) {
      if (state.user.hp <= 0) {
        if (window.confirm('Again?')) {
          state.user.hp = state.user.maxhp;
        } else {
          alert('Over');
        }
      }
    },
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
