<template>
  <div class="flex flex-wrap -mx-2">
    <div class="w-1/2 sm:w-1/3 md:w-1/4 mb-6 px-2" v-for="movie in filtered" :key="movie.id">
      <nuxt-link
        tag="div"
        :to="movie.media_type == 'tv' || type == 'serie' ? '/series/' + movie.id: '/movies/' + movie.id"
        class="card rounded shadow-md hover:shadow-xl cursor-pointer"
      >
        <div class="card-img">
          <img
            :data-src="'https://image.tmdb.org/t/p/w400/' + movie.poster_path"
            :alt="movie.title ? movie.title : movie.name"
            class="block rounded-t"
            v-lazy-load
          />
        </div>
        <div class="card-info p-4">
          <h2
            class="whitespace-no-wrap overflow-dots overflow-hidden font-semibold text-gray-800 text-lg mb-1"
          >{{ movie.title ? movie.title : movie.name }}</h2>
          <p
            v-if="movie.media_type == 'movie' || type == 'movie'"
            class="text-sm text-gray-500 mb-4 whitespace-no-wrap overflow-dots overflow-hidden"
          >{{ movie.genre_ids | filterMovieGenres }}</p>
          <p
            v-else-if="movie.media_type == 'tv' || type == 'serie'"
            class="text-sm text-gray-500 mb-4 whitespace-no-wrap overflow-dots overflow-hidden"
          >{{ movie.genre_ids | filterSerieGenres }}</p>
          <div class="inline-block bg-yellow-400 rounded px-2 align-text-bottom">
            <font-awesome-icon
              size="1x"
              fixedWidth
              class="align-text-top text-white"
              :icon="['fas', 'star']"
            />
            <span class="text-gray-800 font-bold text-xl">{{ movie.vote_average }}</span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filtered: {},
    type: ""
  },
};
</script>

<style scoped>
.isLoading {
  background-color: black;
}
</style>