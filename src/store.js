import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        buletens: []
    },
    mutations: {
        ADD_BULETEN(state, buleten) {
            state.buletens.push(buleten);
            localStorage.buletens = JSON.stringify(state.buletens);
            JSON.parse(window.localStorage.getItem('buletens'))
            console.log(state.buletens);
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
        }
    }
});
