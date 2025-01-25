<template>
  <div>
    <TextFilter
      aria-label="Filter countries by name"
      placeholder="Filter countries..."
      v-model="filter"
    />
    <ul v-if="filteredCountries.length > 0" class="divide-y divide-gray-200 dark:divide-gray-800">
      <CountriesListItem
        v-for="country in filteredCountries"
        :key="country.countryCode"
        :country="country"
      />
    </ul>
    <InfoSection
      v-else
      title="No countries found..."
      description="Try adjusting your search or using different keywords. Still can’t find what you’re looking for? Double-check your spelling or clear the filter to see everything."
    />
  </div>
</template>
<script setup lang="ts">
import type { Countries } from '@/lib/data/types'
import CountriesListItem from './CountriesListItem.vue'
import InfoSection from '@/shared/components/InfoSection.vue'
import TextFilter from '@/shared/components/TextFilter.vue'
import { computed, ref } from 'vue'

const filter = ref('')

const { countries } = defineProps<{
  countries: Countries
}>()

const filteredCountries = computed(() =>
  countries.filter(({ name }) => name.toLowerCase().includes(filter.value.toLowerCase())),
)
</script>
