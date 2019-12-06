import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  actions: {
  },
  modules: {
  },
});
