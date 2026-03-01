import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { menuRegistry } from '@menu'
import { AdminMenuBuilder } from '@admin'
import { UserMenuBuilder } from '@user'
import { LanguageMenuBuilder } from "@/packages/vue-language";
import { MediaMenuBuilder } from "@media";

menuRegistry.register(new AdminMenuBuilder())
menuRegistry.register(new UserMenuBuilder())
menuRegistry.register(new LanguageMenuBuilder())
menuRegistry.register(new MediaMenuBuilder())

createApp(App).use(router).mount('#app')
