<template>
  <div class="my-12 flex h-max flex-col items-center justify-center gap-y-4">
    <span className="text-center text-xl font-semibold">
      {{ title }}
    </span>
    <p class="max-w-2xl text-center text-pretty text-gray-500 dark:text-gray-300">
      {{ description }}
    </p>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const { title, description } = defineProps<{
  title: string
  description: string
}>()
</script>
