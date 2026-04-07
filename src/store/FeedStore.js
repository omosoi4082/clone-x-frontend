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
    removeFeed(id) {
      this.feedlsit = this.feedlsit.filter((f) => f.id !== id);
    },
  },
});
