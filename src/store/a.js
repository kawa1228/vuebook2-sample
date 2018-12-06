export default {
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
