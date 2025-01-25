<template>
  <li class="group">
    <RouterLink
      :to="`/holidays/${country.countryCode.toLowerCase()}/${currentYear}`"
      class="flex flex-1 items-center justify-between px-4 py-12 text-xl font-semibold"
    >
      {{ country.name }}
      <ArrowLongRightIcon
        class="mr-8 size-6 text-transparent transition-all duration-300 group-hover:translate-x-8 group-hover:text-gray-900 group-hover:dark:text-gray-100"
      />
    </RouterLink>
  </li>
</template>
<script lang="ts" setup>
import type { Countries } from '@/lib/data/types'
import { RouterLink } from 'vue-router'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const currentYear = new Date().getFullYear()

const { country } = defineProps<{
  country: Countries[number]
}>()
</script>
