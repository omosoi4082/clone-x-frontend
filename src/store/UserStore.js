import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    name: "테스터",
  }),
  getters: {
    userName: (state) => state.name,
  },
  actions: {},
});
