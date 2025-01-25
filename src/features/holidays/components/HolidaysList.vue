<template>
  <div>
    <TextFilter
      aria-label="Filter holidays by name"
      placeholder="Filter holidays..."
      v-model="filter"
    />
    <ul v-if="filteredHolidays.length > 0" class="divide-y divide-gray-200 dark:divide-gray-800">
      <HolidaysListItem
        v-for="holiday in filteredHolidays"
        :key="holiday.localName"
        :holiday="holiday"
      />
    </ul>
    <InfoSection
      v-else
      title="No holidays found..."
      description="Try adjusting your search or using different keywords. Still can’t find what you’re looking for? Double-check your spelling or clear the filter to see everything."
    />
  </div>
</template>
<script setup lang="ts">
import type { Holidays } from '@/lib/data/types'
import HolidaysListItem from './HolidaysListItem.vue'
import InfoSection from '@/shared/components/InfoSection.vue'
import TextFilter from '@/shared/components/TextFilter.vue'
import { computed, ref } from 'vue'

const { holidays } = defineProps<{
  holidays: Holidays
}>()

const filter = ref('')

const filteredHolidays = computed(() =>
  holidays.filter(({ name }) => name.toLowerCase().includes(filter.value.toLowerCase())),
)
</script>
