import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    message: "メッセージ",
    list: [
      { id: 1, name: "apple", price: 100 },
      { id: 2, name: "banana", price: 200 },
      { id: 3, name: "grape", price: 300 }
    ]
  },
  getters: {
    count(state, getters, rootState, rootGetter) {
      return state.count;
    },
    max(state) {
      return state.list.reduce((a, b) => {
        return a.price > b.price ? a.price : b.price;
      }, 0);
    },
    item(state) {
      return id => state.list.find(el => el.id === id);
    },
    name(state, getters) {
      return id => getters.item(id).name;
    }
  },
  mutations: {
    increment: state => {
      state.count++;
    }
  },
  actions: {}
});
