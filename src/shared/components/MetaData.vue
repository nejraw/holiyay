<template>
  <dl class="grid">
    <template v-for="item in items" :key="item.value">
      <dt class="text-xs font-medium text-gray-500 uppercase dark:text-gray-300">
        {{ item.label }}
      </dt>
      <dd class="mt-1 mb-4 text-gray-900 sm:row-start-2 sm:mb-0 dark:text-gray-100">
        {{ item.value }}
      </dd>
    </template>
  </dl>
</template>
<script setup lang="ts">
const { items } = defineProps<{
  items: Array<{ label: string; value: string }>
}>()
</script>
