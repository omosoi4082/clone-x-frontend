<template>
  <div class="feed-list-container">
    <FeedItem v-for="item in feedlists.feedlsit" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { useFeedStore } from "@/store/FeedStore";
import FeedItem from "./FeedItem.vue";

export default {
  name: "FeedList",
  components: { FeedItem },
  data() {
    return {
      feedlists: useFeedStore(),
    };
  },
  created() {
    this.feedlists.getFeedData();
  },
};
</script>

<style scoped>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
}
</style>
