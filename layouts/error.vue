<template>
  <div class="container mx-auto px-6 py-6 min-h-screen">
    <h1 class="font-heading text-4xl mb-4 text-gray-800">{{ error.message }}</h1>
    <nuxt-link to="/" class="text-blue-600" exact>Home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {}
  },
  head() {
    return {
      title: "Error - Movries"
    };
  },
};
</script>