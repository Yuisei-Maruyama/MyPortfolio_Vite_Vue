import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/pages/Home.vue') },
  { path: '/Page1', name: 'page1', component: () => import('@/pages/Page1.vue') },
  { path: '/Page2', name: 'page2', component: () => import('@/pages/Page2.vue') },
]

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
})

export default router
