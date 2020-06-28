<template>
  <footer class="bg-gray-900 mt-6">
      <div class="container mx-auto py-6 px-6">
        <div class="flex justify-between">
          <p class="text-white">Movries &copy; {{ new Date().toLocaleDateString('en-US', {year: 'numeric'}) }}</p>
          <p class="text-white">Made with <font-awesome-icon
                    class="text-red-500"
                    size="sm"
                    fixedWidth
                    :icon="['far', 'heart']"
                  /> by Duha</p>
        </div>
      </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
</style>