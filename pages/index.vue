<template>
  <Loader v-if="$fetchState.pending" />
  <div v-else class="container mx-auto py-6 px-6">
    <h1 class="font-heading text-4xl ml-2 mb-4 text-gray-800">{{ title }}</h1>

    <MovieList :filteredMovies="trending.results" />
  </div>
</template>

<script>
import MovieList from "~/components/MovieList";
import Loader from "~/components/Loader";
import { mapState } from "vuex";

export default {
  async fetch() {
    await this.$store.dispatch("fetchTrending");
  },
  data() {
    return { title: "Trending Movies" };
  },
  computed: {
    ...mapState(["trending", "loading", "error"])
  },
  components: {
    MovieList,
    Loader
  }
};
</script>

<style></style>
