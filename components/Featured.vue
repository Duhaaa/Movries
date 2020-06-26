<template>
  <nuxt-link
    :to="type == 'movie' ? '/movies/' + featured.id : '/series/' + featured.id"
    tag="div"
    class="card feature-card px-2 rounded shadow-md cursor-pointer"
    :style="`height: 32rem; background-image: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%), url(${backgroundUrl});`"
  >
    <div class="container flex items-end h-full">
      <div class="w-full sm:w-1/2 px-4 py-6 sm:px-6 sm:py-6 text-white">
        <h1
          class="font-heading text-white text-4xl inline-block mr-2"
        >{{ type == 'movie' ? featured.title : featured.name }}</h1>
        <div class="inline-block bg-yellow-400 rounded px-2 align-text-bottom">
          <font-awesome-icon
            class="align-text-top text-white"
            size="1x"
            fixedWidth
            :icon="['fas', 'star']"
          />
          <span class="text-gray-800 font-bold text-xl">{{ featured.vote_average }}</span>
        </div>
        <p
          v-if="type == 'movie'"
          class="text-white mb-2 font-bold"
        >{{ featured.genre_ids | filterMovieGenres }}</p>
        <p v-else class="text-white mb-2 font-bold">{{ featured.genre_ids | filterSerieGenres }}</p>
        <p
          class="whitespace-no-wrap overflow-dots overflow-hidden text-gray-500"
        >{{ featured.overview }}</p>
        <button
          class="mt-4 bg-red-600 hover:bg-red-500 uppercase px-4 py-2 font-bold rounded inline-flex items-center"
        >
          Check it out
          <font-awesome-icon fixedWidth class="ml-2" size="1x" :icon="['fas', 'arrow-right']" />
        </button>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    featured: {},
    type: ""
  },
  computed: {
    backgroundUrl() {
      if (process.client) {
        let width = window.innerWidth;
        if (width < 640) {
          return "https://image.tmdb.org/t/p/w400/" + this.featured.poster_path;
        } else {
          return (
            "https://image.tmdb.org/t/p/original/" + this.featured.backdrop_path
          );
        }
      }
    }
  }
};
</script>

<style scoped>
.feature-card {
  /*background-color: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%); */
  background-size: cover;
  background-repeat: no-repeat;
}
</style>