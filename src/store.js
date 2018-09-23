import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buletens: [],
    totalBuletens: Number,
    perPage: 5,
    currentPage: 1
  },
  mutations: {
    ADD_BULETEN(state, buleten) {
      state.buletens.push(buleten);
      state.totalBuletens = state.buletens.length;
    },
    DELETE_BULETEN(state, buleten) {
      state.buletens.splice(buleten, 1);
    }
  },
  actions: {
    addBuleten({ commit }, buleten) {
      commit("ADD_BULETEN", buleten);
    },
    deleteBuleten({ commit }, buleten) {
      commit("DELETE_BULETEN", buleten);
    }
  },
  getters: {
    buletens(state) {
      return state.buletens;
    },
    buletensLength(state){
      return state.buletens.length;
    }
  }
});
