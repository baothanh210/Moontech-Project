import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
createApp(App).use(AOS.init()).use(store).mount('#app')
