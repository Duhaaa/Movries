<template>
  <div class="mt-6" v-if="list.credits.cast.length > 0">
    <h3 class="font-heading text-lg text-gray-800 mb-2">Cast</h3>
    <div class="flex flex-wrap -mx-2">
      <div
        class="w-1/2 sm:w-1/6 mb-6 px-2"
        v-for="cast in list.credits.cast.slice(0, amountOfCast)"
        :key="cast.cast_id"
      ><nuxt-link to="" tag="div" class="shadow-md hover:shadow-xl rounded cursor-pointer">
        <div class="overflow-hidden">
        <img
          :src="
            cast.profile_path != null
              ? 'https://image.tmdb.org/t/p/w185/' +
                cast.profile_path
              : 'https://via.placeholder.com/185x278?text=MOVRIES'
          "
          :alt="cast.name"
          class="block rounded-t"
        />
        </div>
        <div class="p-4">
          <span
            class="font-semibold text-gray-800 block whitespace-no-wrap overflow-hidden overflow-dots"
          >{{ cast.name }}</span>
          <span
            class="text-sm text-gray-500 block whitespace-no-wrap overflow-hidden overflow-dots"
          >{{ cast.character }}</span>
        </div>
        </nuxt-link>
      </div>
    </div>
    <span
      v-if="this.list.credits.cast.length > 6"
      @click="showMoreCast"
      class="cursor-pointer text-blue-600"
    >
      {{ moreCast ? "Show Less" : "Show Full Cast" }}
      <font-awesome-icon
        fixedWidth
        class="ml-2 align-middle"
        size="1x"
        :icon="moreCast ? ['fas', 'arrow-left'] : ['fas', 'arrow-right']"
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
      amountOfCast: 6,
      moreCast: false
    };
  },
  methods: {
    showMoreCast() {
      this.moreCast = !this.moreCast;
      if (this.amountOfCast == 6) {
        this.amountOfCast = this.list.credits.cast.length;
      } else if (this.amountOfCast == this.list.credits.cast.length) {
        this.amountOfCast = 6;
      }
    }
  }
};
</script>