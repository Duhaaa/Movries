<template>
  <Loader v-if="$fetchState.pending" />
  <div v-else class="container mx-auto py-6 px-6 sm:px-0">
    <h1 class="font-heading text-4xl mb-4 text-gray-800">{{ title }}</h1>
    <List :filtered="filteredNoPerson" />
  </div>
</template>

<script>
import List from "~/components/List";
import Loader from "~/components/Loader";
import { mapState } from "vuex";

export default {
  async fetch() {
    await this.$store.dispatch("fetchTrending");
  },
  data() {
    return { title: "Discover Movies & Series" };
  },
  computed: {
    ...mapState(["list", "error"]),
    filteredNoPerson() {
      return this.list.results.filter(f => {
        return f.media_type != "person";
      });
    }
  },
  components: {
    List,
    Loader
  }
};
</script>

<style></style>
