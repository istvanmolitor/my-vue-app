import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { menuRegistry } from './packages/ts-menu'
import { AdminMenuBuilder } from './packages/vue-admin'

menuRegistry.register(new AdminMenuBuilder())

createApp(App).use(router).mount('#app')
