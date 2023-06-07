import './assets/clean_browser_default.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free'
import axios from "axios";
import {baseUrl} from "../config";

window.axios = axios;
window.axios.defaults.baseURL = baseUrl
window.token = null;

const vuetify = createVuetify({
    components, directives
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
