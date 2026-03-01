import { createRouter, createWebHistory } from 'vue-router'
import userRoutes from '@user/router'
import { authGuard } from '@user/router/guards'
import languageRoutes from "@language/router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('../views/DashboardView.vue') },
    ...userRoutes,
    ...languageRoutes,
  ],
})

router.beforeEach(authGuard)

export default router

