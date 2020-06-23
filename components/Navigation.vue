<template>
  <header class="bg-gray-900 font-semibold sticky top-0 z-50">
    <div class="container mx-auto py-4 px-8 flex justify-between">
      <ul class="flex items-center">
        <li class="mr-6">
          <nuxt-link
            to="/"
            class="text-white text-2xl no-underline font-semibold border-4 rounded px-2"
          >MOVRIES</nuxt-link>
        </li>
        <li class="mr-6 py-2 dropdown relative inline-block cursor-pointer">
          <nuxt-link
            to="/movies/popular"
            class="text-gray-500 pointer-events-none hover:text-gray-400"
            active-class="dropdown-parent-active"
          >MOVIES</nuxt-link>
          <ul class="dropdown-menu bg-white border-transparent rounded shadow-xl mt-1 hidden absolute text-gray-500">
            <li>
              <nuxt-link
                to="/movies/popular"
                class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap rounded-t"
                exact-active-class="dropdown-active"
                href="#"
              >Popular</nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/movies/top-rated"
                class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap"
                exact-active-class="dropdown-active"
                href="#"
              >Top Rated</nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/movies/upcoming"
                class="py-2 px-4 bg-white hover:bg-gray-800 hover:text-gray-400 block whitespace-no-wrap rounded-b"
                exact-active-class="dropdown-active"
                href="#"
              >Upcoming</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="mr-6">
          <nuxt-link
            to="/series/"
            class="text-gray-500 no-underline hover:text-gray-400"
          >SERIES</nuxt-link>
        </li>
      </ul>
      <div class="py-2"><font-awesome-icon class="text-gray-500 hover:text-gray-400 cursor-pointer" size="1x" :icon="['fas', 'search']" /></div>
    </div>
  </header>
</template>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-parent-active {
  color: white;
}

.dropdown-active {
  background-color: #2d3748;
  color: #cbd5e0;
}

</style>