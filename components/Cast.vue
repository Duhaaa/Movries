<template>
  <div class="mt-6">
    <h3 class="font-heading text-lg text-gray-800 mb-2">Cast</h3>
    <div class="flex flex-wrap">
      <div
        class="mb-6 shadow-md hover:shadow-xl rounded mr-4 cursor-pointer cast-card"
        style="width: 138px"
        v-for="cast in movie.credits.cast.slice(0, amountOfCast)"
        :key="cast.cast_id"
      >
        <img
          :src="
            cast.profile_path != null
              ? 'https://image.tmdb.org/t/p/w138_and_h175_face/' +
                cast.profile_path
              : 'https://via.placeholder.com/138x175?text=MOVRIES'
          "
          :alt="cast.name"
          class="overflow-hidden rounded-t"
        />
        <div class="p-4">
          <span class="font-semibold block overflow-hidden overflow-dots">{{ cast.name }}</span>
          <span class="text-sm text-gray-500 block overflow-hidden overflow-dots">{{ cast.character }}</span>
        </div>
      </div>
    </div>
    <span @click="showMoreCast" class="cursor-pointer text-blue-600"
      >{{ moreCast ? "Show Less" : "Show Full Cast" }}
      <font-awesome-icon
        class="ml-2"
        size="1x"
        :icon="moreCast ? ['fas', 'arrow-left'] : ['fas', 'arrow-right']"
    /></span>
  </div>
</template>

<script>
export default {
  props: {
    movie: {}
  },
  data() {
    return {
      amountOfCast: 6,
      moreCast: false
    };
  },
  methods: {
    showMoreCast() {
      this.moreCast = !this.moreCast;
      if (this.amountOfCast == 6) {
        this.amountOfCast = this.movie.credits.cast.length;
      } else if (this.amountOfCast == this.movie.credits.cast.length) {
        this.amountOfCast = 6;
      }
    }
  }
};
</script>
