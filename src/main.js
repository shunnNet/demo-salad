import { createApp } from 'vue'
import App from './App.vue'
import '@/scss/index.scss'
import { loadFont } from '@/utils/browser.js'

loadFont('https://use.typekit.net/wel8ibk.css')

createApp(App).mount('#app')
