<template>
  <div v-if="list.seasons.length > 0" class="my-10">
    <h3 class="font-heading text-lg text-gray-800 mb-2">Seasons</h3>
    <div class="flex flex-wrap">
      <nuxt-link
        :to="'/movies/' + season.id"
        tag="div"
        class="mb-6 shadow-md hover:shadow-xl rounded mr-4 cursor-pointer small-card"
        style="width: 138px"
        v-for="season in list.seasons.slice(0, amountOfSeasons)"
        :key="season.id"
      >
        <img
          :src="
            season.poster_path != null
              ? 'https://image.tmdb.org/t/p/w154/' + season.poster_path
              : 'https://via.placeholder.com/138x175?text=MOVRIES'
          "
          :alt="season.name"
          class="overflow-hidden rounded-t"
        />
        <div class="p-4">
          <span class="font-semibold block overflow-hidden overflow-dots">{{ season.name }}</span>
        </div>
      </nuxt-link>
    </div>
    <span v-if="this.list.seasons.length > 6" @click="showMoreSeasons" class="cursor-pointer text-blue-600">
      {{ moreSeasons ? "Show Less" : "Show More Seasons" }}
      <font-awesome-icon
        class="ml-2 align-middle"
        fixedWidth
        size="1x"
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