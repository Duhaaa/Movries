<template>
  <div v-if="movie.similar.total_results > 0" class="my-10">
    <h3 class="font-heading text-lg text-gray-800 mb-2">
      Similar Movies
    </h3>
    <div class="flex flex-wrap">
      <nuxt-link
        :to="'/movies/' + sim.id"
        tag="div"
        class="mb-6 shadow-md hover:shadow-xl rounded mr-4 cursor-pointer cast-card"
        style="width: 138px"
        v-for="sim in movie.similar.results.slice(0, amountOfMovies)"
        :key="sim.id"
      >
        <img
          :src="
            sim.poster_path != null
              ? 'https://image.tmdb.org/t/p/w154/' + sim.poster_path
              : 'https://via.placeholder.com/138x175?text=MOVRIES'
          "
          :alt="sim.title"
          class="overflow-hidden rounded-t"
        />
        <div class="p-4">
          <span class="font-semibold block overflow-hidden overflow-dots">{{ sim.title }}</span>
        </div>
      </nuxt-link>
    </div>
    <span @click="showMoreMovies" class="cursor-pointer text-blue-600"
      >{{ moreMovies ? "Show Less" : "Show More Similar Movies" }}
      <font-awesome-icon class="ml-2 align-middle" fixedWidth size="1x" :icon="['fas', 'arrow-right']"
    /></span>
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
