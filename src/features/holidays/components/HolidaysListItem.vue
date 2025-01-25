<template>
  <li class="flex flex-1 items-center justify-between gap-x-4 px-4 py-12">
    <div class="flex flex-col">
      <span class="text-sm font-medium text-gray-500 uppercase dark:text-gray-300">
        {{ holiday.localName }}
      </span>
      <span class="text-xl font-semibold"> {{ holiday.name }}</span>
    </div>
    <time
      class="bg-gray-90 rounded-full border-1 border-gray-500 px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-300"
      :datetime="holiday.date"
    >
      {{ holiday.date }}
    </time>
  </li>
</template>
<script lang="ts" setup>
import type { Holiday } from '@/lib/data/types'

const { holiday } = defineProps<{
  holiday: Holiday
}>()
</script>
