<template>
  <div class="font-sans text-black antialised">
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export default {
  components: {
    Navigation,
    Footer
  }
};
</script>

<style></style>
