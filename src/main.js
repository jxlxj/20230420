import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRellax from 'vue-rellax'
import '@/assets/font/font.css'
createApp(App).use(store).use(router).use(VueRellax).mount('#app')
