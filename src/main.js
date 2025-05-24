import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// استيراد AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.mount('#app')


AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,  
})

