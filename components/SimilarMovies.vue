<template>
  <div v-if="movie.similar.total_results > 0" class="my-10">
    <h3 class="font-heading text-lg text-gray-800 mb-2">Similar Movies</h3>
    <div class="flex flex-wrap -mx-2">
      <div
        class="w-1/2 sm:w-1/3 lg:w-1/6 mb-6 px-2"
        v-for="sim in movie.similar.results.slice(0, amountOfMovies)"
        :key="sim.id"
      ><nuxt-link :to="'/movies/' + sim.id" tag="div" class="shadow-md hover:shadow-xl rounded cursor-pointer small-card">
        <div class="overflow-hidden">
        <img
          :src="
            sim.poster_path != null
              ? 'https://image.tmdb.org/t/p/w400/' +
                sim.poster_path
              : 'https://via.placeholder.com/400x600?text=MOVRIES'
          "
          :alt="sim.title"
          class="block rounded-t"
        />
        </div>
        <div class="p-4">
          <span
            class="font-semibold text-gray-800 block whitespace-no-wrap overflow-hidden overflow-dots"
          >{{ sim.title }}</span>
        </div>
        </nuxt-link>
      </div>
    </div>
    <span
      v-if="this.movie.similar.results.length > 6"
      @click="showMoreMovies"
      class="cursor-pointer text-blue-600"
    >
      {{ moreMovies ? "Show Less" : "Show More Similar Movies" }}
      <font-awesome-icon
        fixedWidth
        class="ml-2 align-middle"
        size="sm"
        :icon="moreMovies ? ['fas', 'arrow-left'] : ['fas', 'arrow-right']"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    movie: {}
  },
  data() {
    return {
      amountOfMovies: 6,
      moreMovies: false
    };
  },
  methods: {
    showMoreMovies() {
      this.moreMovies = !this.moreMovies;
      if (this.amountOfMovies == 6) {
        this.amountOfMovies = this.movie.similar.results.length;
      } else if (this.amountOfMovies == this.movie.similar.results.length) {
        this.amountOfMovies = 6;
      }
    }
  }
};
</script>
