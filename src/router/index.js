import { createRouter, createWebHistory } from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'

const routes = [
  {
    path: '/',
    name: 'paginainicial',
    component: PaginaInicial
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
