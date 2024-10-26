import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Importar Bootstrap e BootstrapVue CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// Importar Bootstrap Icons (opcional)
import 'bootstrap-icons/font/bootstrap-icons.css'
// Importar BootstrapVue
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)

app.mount('#app')
