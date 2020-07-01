<template>
  <div class="container mx-auto py-6 px-6 md:flex min-h-screen">
    <div class="w-full md:w-1/4 flex flex-wrap md:block md:flex-no-wrap">
      <img
        :src="list.poster_path ? 'https://image.tmdb.org/t/p/w400/' + list.poster_path : 'https://via.placeholder.com/400x600?text=MOVRIES'"
        alt
        class="poster-shadow rounded mb-12"
      />
    </div>
    <div class="w-full md:w-3/4 md:ml-12">
      <h1 class="font-heading text-gray-800 text-4xl mb-6">{{ list.name }}</h1>
      <div v-if="list.overview">
        <h2 class="font-heading text-gray-800 text-xl mb-2">Overview</h2>
        <p class="text-gray-500 whitespace-pre-line">{{list.overview}}</p>
      </div>

      <div v-if="list.episodes.length > 0" class="mt-10">
        <h3 class="font-heading text-lg text-gray-800 mb-2 inline-block mr-2">Episodes</h3>
        <span class="text-gray-500 inline-block">({{list.episodes.length}})</span>
        <div v-for="episode in list.episodes" :key="episode.id" class="mb-6">
          <div class="lg:flex rounded shadow-md">
            <img
              :data-src="episode.still_path ? 'https://image.tmdb.org/t/p/w300/' + episode.still_path : 'https://via.placeholder.com/300x169?text=MOVRIES'"
              :alt="episode.name"
              class="rounded w-full lg:w-auto object-cover"
              v-lazy-load
            />
            <div class="p-4 flex-grow">
              <div class="flex justify-between items-baseline mb-1">
                <h4
                  class="font-heading text-base text-gray-800"
                >{{ episode.episode_number }} {{ episode.name }}</h4>
                <span class="text-xs text-gray-800 font-bold">
                  {{ stringToDate(episode.air_date, {day: "numeric",
                  month: "long",
                  year: "numeric"}) }}
                </span>
              </div>
              <div class="mb-2 bg-yellow-400 text-xs px-2 inline-block rounded">
                <font-awesome-icon
                  class="inline-block align-middle mb-px text-white"
                  size="1x"
                  fixedWidth
                  :icon="['fas', 'star']"
                />
                <span
                  class="align-middle text-gray-800 font-bold"
                >{{ episode.vote_average.toFixed(1) }}</span>
              </div>
              <p
                class="text-sm text-gray-500"
              >{{ episode.overview ? episode.overview : 'This episode has no summary.' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async asyncData({ store, params, error }) {
    await store
      .dispatch("fetchSeasonByIdAndNumber", {
        serie_id: params.id,
        season_number: params.season_id
      })
      .then(res => {
        list: res;
      })
      .catch(e => {
        error({
          statusCode: 404,
          message: "Season not found."
        });
      });
  },
  head() {
    return {
      title: this.list.name + "- Movries",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: this.list.name
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.list.overview
            ? this.list.overview
            : "A Movies and Series fetcher using TMDb API and NuxtJS"
        }
      ]
    };
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["list"])
  },
  methods: {
    stringToDate(date, options) {
      return new Date(date).toLocaleDateString("en-US", options);
    }
  }
};
</script>

<style scoped>
</style>