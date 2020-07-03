<template>
  <div class="container mx-auto py-6 px-6">
    <h1 class="font-heading text-4xl mb-4 text-gray-800">{{ title }}</h1>
    <List :filtered="filteredNoPerson" />
  </div>
</template>

<script>
import List from "~/components/List";
import { mapState } from "vuex";

export default {
  async asyncData({ store, params, error }) {
      console.log(params.query)
      await store
        .dispatch("searchMoviesAndSeries", params.query)
        .then(res => {
          list: res;
        })
        .catch(e => {
          error({
            statusCode: 404,
            message: "No results."
          });
        });
  },
  data() {
    return { title: "Search results for: " + this.$route.params.query };
  },
  computed: {
    ...mapState(["list"]),
    filteredNoPerson() {
      return this.list.results.filter(f => {
        return f.media_type != "person";
      });
    }
  },
  components: {
    List
  }
};
</script>

<style></style>
