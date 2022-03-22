import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { authStore } from '@/store/authStore'

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.config.globalProperties.$auth = authStore();

app.mount('#app')
