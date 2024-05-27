import './assets/scss/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Notifications from '@kyvg/vue3-notification'
import VueCookies from 'vue-cookies'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueCookies, { expires: '7d' })
app.use(createPinia())
app.use(router)
app.use(Notifications)
app.mount('#app')
