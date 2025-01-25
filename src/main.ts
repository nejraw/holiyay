import './lib/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './lib/router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(router).use(VueQueryPlugin)

app.mount('#app')
