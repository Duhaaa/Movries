<template>
  <Loader v-if="$fetchState.pending" />
  <div v-else class="mx-auto">
    <div
      class="hero bg-gray-700"
      :style="
        `background-image:linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 90%), url(${backgroundImage}); background-size:cover;`
      "
    >
      <div class="hero-inner container mx-auto flex items-end pb-2">
        <div class="hidden sm:block w-1/4"></div>
        <div class="w-full px-6 sm:px-0 sm:w-3/4 sm:ml-12">
          <h1 class="font-heading text-white text-4xl">
            {{ movie.title }}
            <span class="font-sans text-2xl align-middle">
              ({{ stringToDate(movie.release_date, { year: "numeric" }) }})
            </span>
          </h1>
          <div class="text-white">
            <span class="mr-8" v-if="movie.runtime > 0">
              <font-awesome-icon class="align-text-bottom" fixedWidth size="1x" :icon="['far', 'clock']" />
              {{ movie.runtime }} min
            </span>
            <span v-for="(genre, index) in movie.genres" :key="genre.id">
              <span v-if="index != 0">,</span>
              <span>{{ genre.name }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto sm:flex">
      <div
        class="w-full px-6 mt-6 sm:px-0 sm:w-1/4 sm:-mt-20 flex flex-wrap sm:block sm:flex-no-wrap"
      >
        <img
          :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path"
          :alt="movie.title"
          class="mb-8 poster-shadow rounded hidden sm:inline-block w-full sm:w-auto"
        />
        <div class="mb-6 w-1/2 sm:w-auto">
          <p class="font-bold">TMDb Rating</p>
          <div
            class="mt-2 inline-block bg-yellow-400 rounded px-2 align-text-bottom"
          >
            <font-awesome-icon
              class="align-text-top text-white"
              fixedWidth
              size="1x"
              :icon="['fas', 'star']"
            />
            <span class="text-gray-800 font-bold text-xl">
              {{ movie.vote_average }}
            </span>
          </div>
        </div>

        <div class="mb-6 w-1/2 sm:w-auto">
          <p class="font-bold">Release Date</p>
          <p>
            {{
              stringToDate(movie.release_date, {
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            }}
          </p>
        </div>

        <div class="mb-6 w-1/2 sm:w-auto">
          <p class="font-bold">Budget</p>
          <p>
            {{ movie.budget > 0 ? "$" + movie.budget.toLocaleString() : "-" }}
          </p>
        </div>

        <div class="mb-6 w-1/2 sm:w-auto">
          <p class="font-bold">Revenue</p>
          <p>
            {{ movie.revenue > 0 ? "$" + movie.revenue.toLocaleString() : "-" }}
          </p>
        </div>

        <div class="mb-6 w-full sm:w-auto">
          <p class="font-bold mb-1">Links</p>
          <p
            v-if="
              !movie.homepage &&
                !movie.external_ids.imdb_id &&
                !movie.external_ids.facebook_id &&
                !movie.external_ids.instagram_id &&
                !movie.external_ids.twitter_id
            "
          >
            -
          </p>
          <a target="_blank" v-if="movie.homepage" :href="movie.homepage">
            <font-awesome-icon
              fixedWidth
              size="lg"
              class="mr-2"
              :icon="['fas', 'home']"
            />
          </a>
          <a
            target="_blank"
            v-if="movie.external_ids.imdb_id != null"
            :href="`https://imdb.com/title/` + movie.external_ids.imdb_id"
          >
            <font-awesome-icon
              fixedWidth
              size="lg"
              class="mr-4"
              :icon="['fab', 'imdb']"
            />
          </a>
          <a
            target="_blank"
            v-if="movie.external_ids.facebook_id"
            :href="`https://facebook.com/` + movie.external_ids.facebook_id"
          >
            <font-awesome-icon
              fixedWidth
              size="lg"
              class="mr-2"
              :icon="['fab', 'facebook-square']"
            />
          </a>
          <a
            target="_blank"
            v-if="movie.external_ids.instagram_id"
            :href="`https://instagram.com/` + movie.external_ids.instagram_id"
          >
            <font-awesome-icon
              fixedWidth
              size="lg"
              class="mr-2"
              :icon="['fab', 'instagram']"
            />
          </a>
          <a
            target="_blank"
            v-if="movie.external_ids.twitter_id"
            :href="`https://twitter.com/` + movie.external_ids.twitter_id"
          >
            <font-awesome-icon
              fixedWidth
              size="lg"
              :icon="['fab', 'twitter']"
            />
          </a>
        </div>
      </div>

      <div class="w-full sm:w-3/4 px-6 sm:px-0 sm:ml-12 mt-12">
        <h2 class="font-bold text-lg text-gray-600 mb-6" v-if="movie.tagline">
          {{ movie.tagline }}
        </h2>
        <h1 class="font-heading text-xl text-gray-800 mb-2">Overview</h1>
        <p class="text-gray-500">{{ movie.overview }}</p>

        <Cast :movie="movie" />

        <SimilarMovies :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import SimilarMovies from "~/components/SimilarMovies";
import Cast from "~/components/Cast";
import Loader from "~/components/Loader";
import { mapState } from "vuex";
import axios from "axios";

export default {
  async fetch() {
    await this.$store.dispatch("fetchMovieById", this.$route.params.id);
  },
  head() {
    return {
      title: this.movie.title + " - Movries"
    };
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["movie", "loading", "error"]),
    backgroundImage() {
      return "https://image.tmdb.org/t/p/original/" + this.movie.backdrop_path;
    }
  },
  methods: {
    stringToDate(date, options) {
      return new Date(date).toLocaleDateString("en-US", options);
    }
  },
  components: {
    SimilarMovies,
    Cast,
    Loader
  }
};
</script>

<style scoped>
.cast-card {
  transition: box-shadow 0.2s ease-out;
}

.hero-inner {
  height: 16rem;
}

@media (min-width: 640px) {
  .hero-inner {
    height: 32rem;
  }
}
</style>
