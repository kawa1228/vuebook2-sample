import Vue from "vue";
import Vuex from "vuex";
import { defaultExt } from "upath";

Vue.use(Vuex);

const moduleA = {
  namespaced: true,
  getters: {
    test(state, getters, rootState, rootGetters) {
      getters.item;
      rootGetters.user;

      return [getters.item, rootGetters.user];
    },
    item() {
      return "getter: moduleA/item";
    }
  },
  actions: {
    test({ dispatch, commit, getters, rootGetters }) {
      dispatch("update");
      dispatch("update", null, { root: true });
      commit("update", null, { root: true });
      commit("moduleB/update", null, { root: true });
    },
    update() {
      console.log("action: moduleA/update");
    }
  }
};

const moduleB = {
  namespaced: true,
  mutations: {
    update() {
      console.log("mutation: moduleB/update");
    }
  }
};

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  },
  getters: {
    user() {
      return "getter: user";
    }
  },
  mutations: {
    update() {
      console.log("mutation: update");
    }
  },
  actions: {
    update() {
      console.log("action: update");
    }
  }
});

store.dispatch("moduleA/test");
console.log(store.getters["moduleA/test"]);

// export default new Vuex.Store({
//   state: {
//     message: "初期メッセージ"
//   },
//   getters: {
//     // messageを使用するゲッター
//     message(state) {
//       return state.message;
//     }
//   },
//   mutations: {
//     // メッセージを変更するミューテーション
//     setMessage(state, payload) {
//       state.message = payload.message;
//     }
//   },
//   actions: {
//     // メッセージの更新処理
//     doUpdate({ commit }, message) {
//       commit("setMessage", {
//         message
//       });
//     }
//   }
// });
