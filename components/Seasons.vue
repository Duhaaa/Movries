<template>
  <div v-if="list.seasons.length > 0" class="my-10">
    <h3 class="font-heading text-lg text-gray-800 mb-2">Seasons</h3>
    <div class="flex flex-wrap -mx-2">
      <div
        class="w-1/2 sm:w-1/3 lg:w-1/6 mb-6 px-2"
        v-for="season in list.seasons.slice(0, amountOfSeasons)"
        :key="season.id"
      >
        <nuxt-link :to="list.id + '/season/' + season.season_number" tag="div" class="shadow-md hover:shadow-xl rounded cursor-pointer small-card">
          <div class="overflow-hidden">
            <img
              :data-src="
            season.poster_path != null
              ? 'https://image.tmdb.org/t/p/w400/' +
                season.poster_path
              : 'https://via.placeholder.com/400x600?text=MOVRIES'
          "
              :alt="season.name"
              class="block rounded-t"
              v-lazy-load
            />
          </div>
          <div class="p-4">
            <span
              class="font-semibold text-gray-800 block whitespace-no-wrap overflow-hidden overflow-dots"
            >{{ season.name }}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <span
      v-if="this.list.seasons.length > 6"
      @click="showMoreSeasons"
      class="cursor-pointer text-blue-600"
    >
      {{ moreSeasons ? "Show Less" : "Show More Seasons" }}
      <font-awesome-icon
        fixedWidth
        class="ml-2 align-middle"
        size="sm"
        :icon="moreSeasons ? ['fas', 'arrow-left'] : ['fas', 'arrow-right']"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    list: {}
  },
  data() {
    return {
      amountOfSeasons: 6,
      moreSeasons: false
    };
  },
  methods: {
    showMoreSeasons() {
      this.moreSeasons = !this.moreSeasons;
      if (this.amountOfSeasons == 6) {
        this.amountOfSeasons = this.list.seasons.length;
      } else if (this.amountOfSeasons == this.list.seasons.length) {
        this.amountOfSeasons = 6;
      }
    }
  }
};
</script>