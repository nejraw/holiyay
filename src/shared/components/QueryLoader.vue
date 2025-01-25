<template>
  <slot v-if="isFetching" name="loading">
    <InfoSection
      class="animate-pulse"
      title="Fetching data... 🚀"
      description="Blink once, blink twice, and it should be here!"
    />
  </slot>
  <slot v-else-if="hasError" name="error">
    <InfoSection
      title="Something went wrong while fetching your data! 😕"
      description="Please try again later..."
    />
  </slot>
  <slot v-else></slot>
</template>
<script setup lang="ts">
import InfoSection from './InfoSection.vue'
import { QueriesObserver, useQueryClient } from '@tanstack/vue-query'
import { onUnmounted, ref } from 'vue'

const { queryKeys } = defineProps<{
  queryKeys: Array<Array<string>>
}>()

const isFetching = ref(false)
const hasError = ref(false)

const queryClient = useQueryClient()

const observer = new QueriesObserver(
  queryClient,
  queryKeys.map((key) => ({
    queryKey: key,
  })),
)

const unsubscribe = observer.subscribe((result) => {
  isFetching.value = result.some((query) => query.fetchStatus === 'fetching')
  hasError.value = result.some((query) => query.status === 'error')
})

onUnmounted(() => {
  unsubscribe()
})
</script>
