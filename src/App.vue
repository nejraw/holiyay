<template>
  <div class="mx-auto max-w-4xl px-4">
    <RouterView v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.fullPath">
          <component :is="Component" :route="route" />
        </div>
      </transition>
    </RouterView>
  </div>
</template>
