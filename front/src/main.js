import './assets/clean_browser_default.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free'

const vuetify = createVuetify({
    components, directives
})

const app = createApp(App)

app.use(vuetify/*, {
    rtl: true
}*/)
app.use(router)
app.mount('#app')
