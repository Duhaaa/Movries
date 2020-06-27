<template>
  <div v-if="credits.length > 0" class="mt-10">
    <h3 class="font-heading text-lg text-gray-800 mb-2">Known For</h3>
    <div class="flex flex-wrap -mx-2">
      <div
        class="w-1/2 sm:w-1/3 md:w-1/6 mb-6 px-2"
        v-for="credit in credits.slice(0, amountOfCredits)"
        :key="credit.credit_id"
      >
        <nuxt-link
          :to="credit.media_type == 'movie' ? '/movies/' + credit.id : '/series/' + credit.id"
          tag="div"
          class="shadow-md hover:shadow-xl rounded cursor-pointer small-card"
        >
          <div class="overflow-hidden">
            <img
              :src="credit.poster_path != null ? 'https://image.tmdb.org/t/p/w185/' +
                credit.poster_path
              : 'https://via.placeholder.com/185x278?text=MOVRIES'"
              :alt="credit.title"
              class="block rounded-t"
            />
          </div>
          <div class="p-4">
            <span
              class="font-semibold text-gray-800 block whitespace-no-wrap overflow-hidden overflow-dots"
            >{{ credit.media_type == 'movie' ? credit.title : credit.name }}</span>
            <span
            class="text-sm text-gray-500 block whitespace-no-wrap overflow-hidden overflow-dots"
          >{{ credit.character }}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <span
      v-if="this.credits.length > 6"
      @click="showMoreCredits"
      class="cursor-pointer text-blue-600"
    >
      {{ moreCredits ? "Show Less" : "Show More" }}
      <font-awesome-icon
        fixedWidth
        class="ml-2 align-middle"
        size="1x"
        :icon="moreCredits ? ['fas', 'arrow-left'] : ['fas', 'arrow-right']"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    credits: {}
  },
  data() {
    return {
      amountOfCredits: 6,
      moreCredits: false
    };
  },
  methods: {
    showMoreCredits() {
      this.moreCredits = !this.moreCredits;
      if (this.amountOfCredits == 6) {
        this.amountOfCredits = this.credits.length;
      } else if (this.amountOfCredits == this.credits.length) {
        this.amountOfCredits = 6;
      }
    }
  }
};
</script>

<style scoped>
</style>