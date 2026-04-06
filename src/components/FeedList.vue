<template>
  <div class="feed-list-container">
    <FeedItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import FeedItem from "./FeedItem.vue";
import testData from "./TestData";
export default {
  name: "FeedList",
  components: { FeedItem },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.items = testData;
  },
};
</script>

<style scoped>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
}
</style>
