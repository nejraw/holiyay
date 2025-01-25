import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/features/landing/views/LandingView.vue'),
    },
    {
      path: '/holidays/:countryCode/:year',
      name: 'holidays',
      component: () => import('@/features/holidays/views/HolidaysView.vue'),
      props: true,
    },
  ],
})

export { router }
