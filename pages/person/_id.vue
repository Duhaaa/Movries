<template>
  <div class="container mx-auto py-6 px-6 md:flex min-h-screen">
    <div class="w-full md:w-1/4 flex flex-wrap md:block md:flex-no-wrap">
      <img
        :src="person.profile_path ? 'https://image.tmdb.org/t/p/w400/' + person.profile_path : 'https://via.placeholder.com/400x600?text=MOVRIES'"
        :alt="person.name"
        class="poster-shadow rounded mb-12"
      />
      <div v-if="person.known_for_department" class="mb-6 w-1/2 md:w-auto">
        <p class="font-bold text-gray-800">Department</p>
        <p class="text-gray-500">{{ person.known_for_department }}</p>
      </div>

      <div v-if="person.gender" class="mb-6 w-1/2 md:w-auto">
        <p class="font-bold text-gray-800">Gender</p>
        <p class="text-gray-500">{{ person.gender === 1 ? 'Female' : 'Male' }}</p>
      </div>

      <div v-if="person.birthday" class="mb-6 w-1/2 md:w-auto">
        <p class="font-bold text-gray-800">Birthday</p>
        <p class="text-gray-500">
          {{ stringToDate(person.birthday, {day: "numeric",
          month: "long",
          year: "numeric"}) }}
        </p>
      </div>

      <div v-if="person.deathday" class="mb-6 w-1/2 md:w-auto">
        <p class="font-bold text-gray-800">Died</p>
        <p class="text-gray-500">
          {{ stringToDate(person.deathday, {day: "numeric",
          month: "long",
          year: "numeric"}) }}
        </p>
      </div>

      <div v-if="person.place_of_birth" class="mb-6 w-1/2 md:w-auto">
        <p class="font-bold text-gray-800">Place of Birth</p>
        <p class="text-gray-500">{{ person.place_of_birth }}</p>
      </div>

      <div class="mb-6 w-full md:w-auto">
        <p class="font-bold mb-1 text-gray-800">Links</p>
        <p
          class="text-gray-500"
          v-if="
              !person.homepage &&
                !person.external_ids.imdb_id &&
                !person.external_ids.facebook_id &&
                !person.external_ids.instagram_id &&
                !person.external_ids.twitter_id"
        >-</p>
        <a target="_blank" v-if="person.homepage" :href="person.homepage">
          <font-awesome-icon
            fixedWidth
            size="lg"
            class="mr-2 text-blue-500"
            :icon="['fas', 'home']"
          />
        </a>

        <a
          target="_blank"
          v-if="person.external_ids.imdb_id != null"
          :href="`https://imdb.com/name/` + person.external_ids.imdb_id"
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
          v-if="person.external_ids.facebook_id"
          :href="`https://facebook.com/` + person.external_ids.facebook_id"
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
          v-if="person.external_ids.instagram_id"
          :href="`https://instagram.com/` + person.external_ids.instagram_id"
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
          v-if="person.external_ids.twitter_id"
          :href="`https://twitter.com/` + person.external_ids.twitter_id"
        >
          <font-awesome-icon fixedWidth size="lg" class="text-blue-500" :icon="['fab', 'twitter']" />
        </a>
      </div>
    </div>
    <div class="w-full md:w-3/4 md:ml-12">
      <h1 class="font-heading text-gray-800 text-4xl mb-6 mt-6 sm:mt-0">{{ person.name }}</h1>
      <h2 class="font-heading text-gray-800 text-xl mb-2">Biography</h2>
      <p
        class="text-gray-500 whitespace-pre-line"
      >{{ person.biography ? person.biography : `There is no biography for biography for ${person.name}.` }}</p>

      <KnownFor :credits="person.combined_credits.cast" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import KnownFor from "~/components/KnownFor";

export default {
  async asyncData({ store, params, error }) {
    await store
      .dispatch("fetchPersonById", params.id)
      .then(res => {
        person: res;
      })
      .catch(e => {
        error({
          statusCode: 404,
          message: "No person found."
        });
      });
  },
  head() {
    return {
      title: this.person.name + " - Movries"
    };
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["person"])
  },
  methods: {
    stringToDate(date, options) {
      return new Date(date).toLocaleDateString("en-US", options);
    }
  },
  components: {
    KnownFor
  }
};
</script>

<style scoped>
</style>