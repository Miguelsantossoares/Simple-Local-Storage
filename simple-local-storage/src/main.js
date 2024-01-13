import './assets/main.css'

import {createPinia} from 'pinia' 
import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)
createApp(App).use(createPinia()).mount('#app')

app.use(createPinia())