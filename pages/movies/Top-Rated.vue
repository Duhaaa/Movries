<template>
  <Loader v-if="$fetchState.pending" />
  <div v-else class="container mx-auto py-6 px-6">
    <h1 class="font-heading text-4xl ml-2 mb-4 text-gray-800">{{ title }}</h1>
    
    <div class="w-full mb-6">
      <FeaturedMovie :featuredMovie="featuredMovie" />
    </div>

    <MovieList :filteredMovies="filteredMovies" />
  </div>
</template>

<script>
import FeaturedMovie from "~/components/FeaturedMovie";
import MovieList from "~/components/MovieList";
import Loader from "~/components/Loader";
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: this.title + ' - Movries'
    }
  },
  data() {
    return {
      title: "Top Rated Movies"
    };
  },
  async fetch() {
    await this.$store.dispatch("fetchTopRatedMovies");
  },
  computed: {
    ...mapState(["movies", "loading", "error"]),
    featuredMovie() {
      return this.movies.list.results[0];
    },
    filteredMovies() {
      return this.movies.list.results.slice(1);
    }
  },
  components: {
    FeaturedMovie,
    MovieList,
    Loader
  }
};
</script>

<style></style>
