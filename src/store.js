import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buletens: [],
    buletensInStore: [],
    lsID: localStorage.id,
    userInfo: []
  },
  mutations: {
    ADD_BULETEN(state, buleten) {
      state.buletens.push(buleten);
      localStorage.buletens = JSON.stringify(state.buletens);
    },
    DELETE_BULETEN(state, buleten) {
      state.buletens.splice(buleten, 1);
      localStorage.buletens = JSON.stringify(state.buletens);
    },
    INITIAL_BULLETENS(state) {
      state.buletens = [];
      if (localStorage.buletens) {
        for (let i = 0; i < JSON.parse(localStorage.buletens).length; i++) {
          let element = JSON.parse(localStorage.buletens)[i];
          state.buletens.push(element);
        }
      } else {
        return state.buletens;
      }
    },
    AUTH_REQUEST(state, user) {
      state.userInfo.push(user);
      localStorage.username = user.username;
      localStorage.password = user.password;
    }
  },
  actions: {
    addBuleten({ commit }, buleten) {
      commit("ADD_BULETEN", buleten);
    },
    deleteBuleten({ commit }, buleten) {
      commit("DELETE_BULETEN", buleten);
    },
    initialBulletens({ commit }) {
      commit("INITIAL_BULLETENS");
    },
    authRequest({ commit }, user) {
      if (user === undefined) {
        return false;
      } else {
        return new Promise((resolve, reject) => {
          if (
            localStorage.username === user.username &&
            localStorage.password === user.password
          ) {
            resolve("success");
          } else {
            reject("reject");
          }
        });
      }
      // commit("AUTH_REQUEST", user);
    }
  },
  getters: {
    buletens(state) {
      if (state.buletens) {
        return state.buletens;
      } else {
        return [];
      }
    },

    getUserInfo(state) {
      return state.userInfo;
    }
  }
});
