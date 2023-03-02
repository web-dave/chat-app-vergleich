import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import socketIO from 'socket.io-client'

import './assets/main.css'
const socket = socketIO.connect('http://localhost:4000')
const app = createApp(App)

app.use(router)
app.provide('socket', socket)

app.mount('#app')
