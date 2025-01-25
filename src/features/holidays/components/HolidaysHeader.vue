<template>
  <header class="border-b border-gray-200 px-4 py-8 dark:border-gray-800">
    <nav>
      <RouterLink to="/" class="group flex gap-x-2">
        <ArrowLongLeftIcon
          class="size-6 transition-all duration-300 group-hover:-translate-x-6"
        />Back to overview
      </RouterLink>
    </nav>
    <h1 class="mt-8 text-2xl">
      {{ country.commonName }}
    </h1>
    <MetaData :items="countryMetadata" class="mt-4" />
  </header>
</template>
<script lang="ts" setup>
import type { Country } from '@/lib/data/types'
import { ArrowLongLeftIcon } from '@heroicons/vue/24/outline'
import MetaData from '@/shared/components/MetaData.vue'
import { computed } from 'vue'

const { country } = defineProps<{
  country: Country
}>()

const countryMetadata = computed(() => [
  { label: 'Official Name', value: country.officialName },
  { label: 'Country Code', value: country.countryCode },
  { label: 'Region', value: country.region },
])
</script>
