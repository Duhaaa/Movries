<template>
  <div>
    <header class="bg-gray-900 font-semibold sticky top-0 z-50">
      <div class="container mx-auto py-4 flex justify-between px-6">
        <ul class="flex items-center">
          <li class="mr-6">
            <nuxt-link
              to="/"
              class="text-white text-2xl no-underline font-semibold border-4 rounded px-2"
            >MOVRIES</nuxt-link>
          </li>
          <li class="mr-6 py-2 dropdown relative inline-block cursor-pointer hidden sm:block">
            <nuxt-link
              to="/movies/popular"
              class="text-gray-500 pointer-events-none hover:text-gray-400"
              active-class="dropdown-parent-active"
            >MOVIES</nuxt-link>
            <ul
              class="dropdown-menu bg-white border-transparent rounded shadow-xl mt-1 absolute text-gray-500"
            >
              <li>
                <nuxt-link
                  to="/movies/popular"
                  class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap rounded-t"
                  exact-active-class="dropdown-active"
                >Popular</nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/movies/top-rated"
                  class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap"
                  exact-active-class="dropdown-active"
                >Top Rated</nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/movies/upcoming"
                  class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap rounded-b"
                  exact-active-class="dropdown-active"
                >Upcoming</nuxt-link>
              </li>
            </ul>
          </li>
          <li class="mr-6 py-2 dropdown relative inline-block cursor-pointer hidden sm:block">
            <nuxt-link
              to="/series/popular"
              class="text-gray-500 no-underline pointer-events-none hover:text-gray-400"
              active-class="dropdown-parent-active"
            >SERIES</nuxt-link>
            <ul
              class="dropdown-menu bg-white border-transparent rounded shadow-xl mt-1 absolute text-gray-500"
            >
              <li>
                <nuxt-link
                  to="/series/popular"
                  class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap rounded-t"
                  exact-active-class="dropdown-active"
                >Popular</nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/series/on-air"
                  class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap rounded-b"
                  exact-active-class="dropdown-active"
                >On Air</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
        <div class="py-2">
          <form @submit.stop.prevent="submit">
            <div class="flex">
              <input
                required
                type="search"
                name="q"
                v-model="q"
                placeholder="Search Movries"
                class="px-2 rounded mr-1 w-full"
              />
              <button type="submit" @click.stop.prevent="submit">
                <font-awesome-icon
                  fixedWidth
                  class="align-middle text-gray-500 hover:text-gray-400"
                  size="sm"
                  :icon="['fas', 'search']"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
    <!-- Mobile nav -->
    <div class="bg-gray-900 font-semibold block fixed sm:hidden bottom-0 z-10 w-full px-6 py-4">
      <ul class="flex items-center text-center">
          <li class="py-2 dropdown relative inline-block cursor-pointer w-1/2">
            <nuxt-link
              to="/movies/popular"
              class="text-gray-500 pointer-events-none hover:text-gray-400"
              active-class="dropdown-parent-active"
            >MOVIES</nuxt-link>
            <ul
              class="dropdown-menu bg-white border-transparent rounded shadow-xl absolute text-gray-500 w-full bottom-0 mb-10"
            >
              <li>
                <nuxt-link
                  to="/movies/popular"
                  class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap rounded-t"
                  exact-active-class="dropdown-active"
                >Popular</nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/movies/top-rated"
                  class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap"
                  exact-active-class="dropdown-active"
                >Top Rated</nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/movies/upcoming"
                  class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap rounded-b"
                  exact-active-class="dropdown-active"
                >Upcoming</nuxt-link>
              </li>
            </ul>
          </li>
          <li class="py-2 dropdown relative inline-block cursor-pointer w-1/2">
            <nuxt-link
              to="/series/popular"
              class="text-gray-500 no-underline pointer-events-none hover:text-gray-400"
              active-class="dropdown-parent-active"
            >SERIES</nuxt-link>
            <ul
              class="dropdown-menu bg-white border-transparent rounded shadow-xl absolute text-gray-500 w-full bottom-0 mb-10"
            >
              <li>
                <nuxt-link
                  to="/series/popular"
                  class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap rounded-t"
                  exact-active-class="dropdown-active"
                >Popular</nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/series/on-air"
                  class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap rounded-b"
                  exact-active-class="dropdown-active"
                >On Air</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q: ""
    };
  },
  methods: {
    submit() {
      if (this.q != "") this.$router.push("/search/" + this.q);
    }
  }
};
</script>

<style scoped>
.dropdown-menu {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s, opacity 0.2s ease-out;
}
.dropdown:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
}

.dropdown-parent-active {
  color: white;
}

.dropdown-active {
  background-color: #2d3748;
  color: #cbd5e0;
}
</style>
