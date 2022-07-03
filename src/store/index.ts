import { createStore } from "vuex";

export default createStore({
  state: {
    count: 1,
    person: {
      name: "John",
      age: 21,
    },
  },
  getters: {},
  mutations: {
    change(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});
