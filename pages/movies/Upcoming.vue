<template>
  <Loader v-if="$fetchState.pending" />
  <div v-else class="container mx-auto py-6 px-6">
    <h1 class="font-heading text-4xl mb-4 text-gray-800">{{ title }}</h1>
    <div class="w-full mb-6" >
      <Featured :featured="featuredMovie" :type="type" />
    </div>

    <List :filtered="filteredMovies" :type="type" />
  </div>
</template>

<script>
import Featured from "~/components/Featured";
import List from "~/components/List";
import Loader from "~/components/Loader";
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: this.title + " - Movries"
    }
  },
  data() {
    return {
      title: "Upcoming Movies"
    };
  },
  async fetch() {
    await this.$store.dispatch("fetchUpcomingMovies");
  },
  computed: {
    ...mapState(["list", "type", "error"]),
    featuredMovie() {
      return this.list.results[0];
    },
    filteredMovies() {
      return this.list.results.slice(1);
    }
  },
  components: {
    Featured,
    List,
    Loader
  }
};
</script>

<style></style>
