import { createApp } from 'vue'
import router from "./routes/index.js";
import App from './App.vue'

import './assets/css/bootstrap-grid.css'
import './assets/css/font-awesome.min.css'
import './assets/css/jquery.fancybox.css'
import './assets/css/slick.min.css'
import './assets/css/style.css'
import './assets/css/_template_corrections.css'

import '@modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

const app = createApp(App)

app.use(router)

app.mount('#app')
