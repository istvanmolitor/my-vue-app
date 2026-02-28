import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { menuRegistry } from '@menu'
import { AdminMenuBuilder } from '@admin'
import { UserMenuBuilder } from '@user'

menuRegistry.register(new AdminMenuBuilder())
menuRegistry.register(new UserMenuBuilder())

createApp(App).use(router).mount('#app')
