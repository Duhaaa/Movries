<template>
  <div class="container mx-auto py-6 px-6">
    <h1 class="font-heading text-4xl mb-4 text-gray-800">{{ title }}</h1>

    <div class="w-full mb-6">
      <Featured :featured="featuredMovie" :type="type" />
    </div>
    <List :filtered="filteredMovies" :type="type" />
  </div>
</template>

<script>
import Featured from "~/components/Featured";
import List from "~/components/List";
import { mapState } from "vuex";

export default {
  async asyncData({ store, params, error }) {
    await store
      .dispatch("fetchPopularMovies")
      .then(res => {
        list: res;
      })
      .catch(e => {
        error({
          statusCode: 404,
          message: "No movies found."
        });
      });
  },
  head() {
    return {
      title: this.title + " - Movries"
    };
  },
  data() {
    return {
      title: "Popular Movies"
    };
  },
  computed: {
    ...mapState(["list", "type"]),
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
  }
};
</script>

<style></style>
