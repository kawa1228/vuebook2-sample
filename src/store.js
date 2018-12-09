import Vue from "vue";
import Vuex from "vuex";
import { defaultExt } from "upath";
// import moduleA from "./store/a";
// import moduleB from "./store/b";

Vue.use(Vuex);

// ** storeをモジュール化 **
// const store = new Vuex.Store({
//   stric: true,
//   modules: {
//     moduleA,
//     moduleB
//   },
//   getters: {
//     user() {
//       return "getter: user";
//     }
//   },
//   mutations: {
//     update() {
//       console.log("mutation: update");
//     }
//   },
//   actions: {
//     update() {
//       console.log("action: update");
//     }
//   }
// });

// store.dispatch("moduleA/test");
// console.log(store.getters["moduleA/test"]);

export default new Vuex.Store({
  state: {
    message: "初期メッセージ"
  },
  getters: {
    // messageを使用するゲッター
    message(state) {
      return state.message;
    }
  },
  mutations: {
    // メッセージを変更するミューテーション
    setMessage(state, payload) {
      state.message = payload.message;
    }
  },
  actions: {
    // メッセージの更新処理
    doUpdate({ commit }, message) {
      commit("setMessage", {
        message
      });
    }
  }
});
