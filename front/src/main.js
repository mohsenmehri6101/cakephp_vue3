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
// window. token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJteWFwcCIsInN1YiI6MiwiZXhwIjoxNjg3MTE5NjE0fQ.EtHMRE9WHpM1jzU7Yoo4P4KKMlIO-PoJv0OVhwe4R0d11eaMOIwHJ7dWCPKaPjR5M0ufheJUn29jERWdXWaViP7GGrV_d5CetOUJHoR662HpUwZroet84OEHp-P_L0ACY9B97wbLYmliwTW_Q5vjJdVpzcBjyqPUBtSmEsOTP94';

const vuetify = createVuetify({
    components, directives
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
