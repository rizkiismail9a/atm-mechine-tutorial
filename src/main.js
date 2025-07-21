import { createApp } from 'vue'
import '../plugins/vee-validate'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
