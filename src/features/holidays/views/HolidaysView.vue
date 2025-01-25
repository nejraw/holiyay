<template>
  <QueryLoader
    :query-keys="[
      ['country', countryCode],
      ['holidays', year, countryCode],
    ]"
  >
    <HolidaysHeader v-if="countryData" :country="countryData" />
    <main>
      <HolidaysList v-if="holidayData" :holidays="holidayData" />
    </main>
    <template #error>
      <main class="flex h-dvh items-center justify-around">
        <InfoSection
          title="Something went wrong while fetching your data! 😕"
          description="Please try again later..."
        >
          <RouterLink to="/">Back to overview</RouterLink>
        </InfoSection>
      </main>
    </template>
  </QueryLoader>
</template>
<script setup lang="ts">
import { getCountryInfo, getHolidays } from '@/lib/data/api'
import QueryLoader from '@/shared/components/QueryLoader.vue'
import { useQuery } from '@tanstack/vue-query'
import HolidaysHeader from '@/features/holidays/components/HolidaysHeader.vue'
import HolidaysList from '@/features/holidays/components/HolidaysList.vue'
import InfoSection from '@/shared/components/InfoSection.vue'

const { countryCode, year } = defineProps<{
  countryCode: string
  year: string
}>()

const { data: countryData } = useQuery({
  queryKey: ['country', countryCode],
  queryFn: async () => await getCountryInfo(countryCode),
})

const { data: holidayData } = useQuery({
  queryKey: ['holidays', year, countryCode],
  queryFn: async () => await getHolidays(`${year}/${countryCode}`),
})
</script>
