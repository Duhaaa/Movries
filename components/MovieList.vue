<template>
  <div class="flex flex-wrap">
    <div class="w-1/2 sm:w-1/4 mb-6" v-for="movie in filteredMovies" :key="movie.id">
      <nuxt-link
        tag="div"
        :to="'/movies/' + movie.id"
        class="card mx-2 rounded shadow-md hover:shadow-xl cursor-pointer"
      >
        <div class="card-img">
          <img
            :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path"
            :alt="movie.title ? movie.title : movie.name"
            class="block rounded-t"
          />
        </div>
        <div class="card-info p-4 sm:p-6">
          <h2
            class="whitespace-no-wrap overflow-dots overflow-hidden font-semibold text-gray-800 text-lg mb-1"
          >{{ movie.title ? movie.title : movie.name }}</h2>
          <p
            class="text-sm text-gray-500 mb-4 whitespace-no-wrap overflow-dots overflow-hidden"
          >{{movie.genre_ids | filterGenres}}</p>
          <div class="inline-block bg-yellow-400 rounded px-2 align-text-bottom">
            <font-awesome-icon size="1x" fixedWidth class="align-text-top text-white" :icon="['fas', 'star']" />
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
        filteredMovies: {}
    }
}
</script>