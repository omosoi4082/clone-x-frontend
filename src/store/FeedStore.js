import { defineStore } from "pinia";
import testData from "@/components/TestData";

export const useFeedStore = defineStore("feedStore", {
  state: () => ({
    feedlsit: [],
  }),
  getters: {},
  actions: {
    setFeed() {
      this.feedlsit = testData;
    },
  },
});
