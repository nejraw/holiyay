<template>
  <input
    v-model="value"
    type="text"
    class="sticky top-0 w-full border-b border-gray-200 bg-gray-50 px-4 py-12 text-xl font-medium dark:border-gray-800 dark:bg-gray-950"
  />
</template>
<script setup lang="ts">
const value = defineModel<string>()
</script>
