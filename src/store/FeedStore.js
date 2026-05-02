import { defineStore } from "pinia";
import { authApi } from "@/api";

export const useFeedStore = defineStore("feedStore", {
  state: () => ({
    feedlsit: [],
  }),
  getters: {},
  actions: {
    async getFeedData() {
      try {
        const response = await authApi.get("/feeds");
        this.feedlsit = response.data;
      } catch (error) {
        console.log("error get feed:", error);
      }
    },
    async removeFeed(id) {
      try {
        await authApi.delete(`/feeds/${id}`); //->/feeds/1로 표기
        this.getFeedData();
      } catch (error) {
        console.log("error remove feed:", error);
      }
    },
    async addFeed(content) {
      try {
        await authApi.post("/feeds/", { content }); //->/feeds/1로 표기
        this.getFeedData();
      } catch (error) {
        console.log("error add feed:", error);
      }
    },
  },
});
