<template>
  <div class="mx-auto">
    <div
      class="hero bg-gray-700"
      :style="
        `background-image:linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 90%), url(${backgroundImage}); background-size:cover;`
      "
    >
      <div class="hero-inner container mx-auto flex items-end pb-2">
        <div class="hidden md:block w-1/4"></div>
        <div class="w-full px-6 md:w-3/4 md:ml-12">
          <h1 class="font-heading text-white text-4xl">
            {{ serie.name }}
            <span
              class="font-sans text-2xl align-middle"
            >({{ stringToDate(serie.first_air_date, { year: "numeric" }) }} - {{ stringToDate(serie.last_air_date, { year: "numeric" }) }})</span>
          </h1>
          <div class="text-white">
            <span class="mr-8 block md:inline" v-if="serie.episode_run_time.length > 0">
              <font-awesome-icon
                class="align-text-bottom"
                fixedWidth
                size="1x"
                :icon="['far', 'clock']"
              />
              {{ serie.episode_run_time[0] }} min
            </span>
            <span v-for="(genre, index) in serie.genres" :key="genre.id">
              <span v-if="index != 0">,</span>
              <span>{{ genre.name }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto md:flex px-6">
      <div class="w-full mt-6 md:w-1/4 md:-mt-20 flex flex-wrap md:block md:flex-no-wrap">
        <img
          :src="serie.poster_path ? 'https://image.tmdb.org/t/p/w300/' + serie.poster_path : 'https://via.placeholder.com/400x600?text=MOVRIES'"
          :alt="serie.name"
          class="mb-12 poster-shadow rounded hidden md:inline-block w-full md:w-auto"
        />
        <div class="mb-6 w-1/2 md:w-auto">
          <p class="font-bold text-gray-800">TMDb Rating</p>
          <div class="mt-2 inline-block bg-yellow-400 rounded px-2 align-text-bottom">
            <font-awesome-icon
              class="align-text-top text-white"
              fixedWidth
              size="1x"
              :icon="['fas', 'star']"
            />
            <span class="text-gray-800 font-bold text-xl">{{ serie.vote_average }}</span>
          </div>
        </div>

        <div class="mb-6 w-1/2 md:w-auto">
          <p class="font-bold text-gray-800">Seasons</p>
          <p class="text-gray-500">
            {{
            serie.number_of_seasons
            }}
          </p>
        </div>

        <div class="mb-6 w-1/2 md:w-auto">
          <p class="font-bold text-gray-800">Status</p>
          <p class="text-gray-500">{{ serie.status }}</p>
        </div>

        <div class="mb-6 w-1/2 md:w-auto">
          <p class="font-bold text-gray-800">Network</p>
          <p v-for="network in serie.networks" :key="network.id">
            <img :src="'https://image.tmdb.org/t/p/h15/' + network.logo_path" :alt="network.name" />
          </p>
        </div>

        <div class="mb-6 w-full md:w-auto">
          <p class="font-bold mb-1 text-gray-800">Links</p>
          <p
            class="text-gray-500"
            v-if="
              !serie.homepage &&
                !serie.external_ids.imdb_id &&
                !serie.external_ids.facebook_id &&
                !serie.external_ids.instagram_id &&
                !serie.external_ids.twitter_id"
          >-</p>
          <a target="_blank" v-if="serie.homepage" :href="serie.homepage">
            <font-awesome-icon
              fixedWidth
              size="lg"
              class="mr-2 text-blue-500"
              :icon="['fas', 'home']"
            />
          </a>

          <a
            target="_blank"
            v-if="serie.external_ids.imdb_id != null"
            :href="`https://imdb.com/title/` + serie.external_ids.imdb_id"
          >
            <font-awesome-icon
              fixedWidth
              size="lg"
              class="mr-2 text-blue-500"
              :icon="['fab', 'imdb']"
            />
          </a>
          <a
            target="_blank"
            v-if="serie.external_ids.facebook_id"
            :href="`https://facebook.com/` + serie.external_ids.facebook_id"
          >
            <font-awesome-icon
              fixedWidth
              size="lg"
              class="mr-2 text-blue-500"
              :icon="['fab', 'facebook-square']"
            />
          </a>
          <a
            target="_blank"
            v-if="serie.external_ids.instagram_id"
            :href="`https://instagram.com/` + serie.external_ids.instagram_id"
          >
            <font-awesome-icon
              fixedWidth
              size="lg"
              class="mr-2 text-blue-500"
              :icon="['fab', 'instagram']"
            />
          </a>
          <a
            target="_blank"
            v-if="serie.external_ids.twitter_id"
            :href="`https://twitter.com/` + serie.external_ids.twitter_id"
          >
            <font-awesome-icon
              fixedWidth
              size="lg"
              class="text-blue-500"
              :icon="['fab', 'twitter']"
            />
          </a>
        </div>
      </div>

      <div class="w-full md:w-3/4 md:ml-12 mt-6 md:mt-12">
        <h1 class="font-heading text-xl text-gray-800 mb-2">Overview</h1>
        <p class="text-gray-500 whitespace-pre-line">{{ serie.overview }}</p>

        <Cast :list="serie" />

        <Seasons :list="serie" />
      </div>
    </div>
  </div>
</template>

<script>
import Cast from "~/components/Cast";
import Seasons from "~/components/Seasons";
import { mapState } from "vuex";

export default {
  async asyncData({ store, params, error }) {
    await store
      .dispatch("fetchSerieById", params.id)
      .then(res => {
        serie: res;
      })
      .catch(e => {
        error({
          statusCode: 404,
          message: "Serie not found."
        });
      });
  },
  head() {
    return {
      title: this.serie.name + " - Movries"
    };
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["serie"]),
    backgroundImage() {
      return "https://image.tmdb.org/t/p/original" + this.serie.backdrop_path;
    }
  },
  methods: {
    stringToDate(date, options) {
      return new Date(date).toLocaleDateString("en-US", options);
    }
  },
  components: {
    Cast,
    Seasons,
  }
};
</script>

<style scoped>
</style>