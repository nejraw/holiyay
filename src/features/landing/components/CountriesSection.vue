<template>
  <QueryLoader :query-keys="[['countries']]">
    <section>
      <h2 class="mt-12 mb-8 text-center text-2xl">Available countries</h2>
      <CountriesList v-if="data" :countries="data" />
      <InfoSection
        v-else
        title="No countries available..."
        description="At the moment we are unable to show you the holidays for any country. Please try again later"
      />
    </section>
  </QueryLoader>
</template>
<script setup lang="ts">
import { getCountries } from '@/lib/data/api'
import { useQuery } from '@tanstack/vue-query'
import QueryLoader from '@/shared/components/QueryLoader.vue'
import CountriesList from './CountriesList.vue'
import InfoSection from '@/shared/components/InfoSection.vue'

const { data } = useQuery({
  queryKey: ['countries'],
  queryFn: async () => await getCountries(),
})
</script>
