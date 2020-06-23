<template>
    <nuxt-link
        :to="'/movies/' + featuredMovie.id"
        tag="div"
        class="card mx-2 rounded shadow-md cursor-pointer"
        :style="`height: 32rem; background-image: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%), url(${'https://image.tmdb.org/t/p/original' + featuredMovie.backdrop_path}); background-size: cover;`"
      >
        <div class="container flex items-end h-full">
          <div class="w-full sm:w-1/2 p-6 text-white">
            <h1 class="font-heading text-white text-4xl inline-block mr-2">{{ featuredMovie.title }}</h1>
            <div class="inline-block bg-yellow-400 rounded px-2 align-text-bottom">
              <font-awesome-icon
                class="align-text-top text-white"
                size="1x"
                fixedWidth
                :icon="['fas', 'star']"
              />
              <span class="text-gray-800 font-bold text-xl">{{ featuredMovie.vote_average }}</span>
            </div>
            <p class="text-white mb-2 font-bold">{{ featuredMovie.genre_ids | filterGenres }}</p>

            <p
              class="whitespace-no-wrap overflow-dots overflow-hidden text-gray-500"
            >{{ featuredMovie.overview }}</p>
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
        featuredMovie: {}
    }
}
</script>