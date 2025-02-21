import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'paginainicial',
    component: () => import("../views/PaginaInicial.vue")
  },
  {
    path: '/calcbhaskara',
    name: 'calcbhaskara',
    component: () => import("../views/BhaskaraView.vue")
  },
  {
    path: '/calcimc',
    name: "calcimc",
    component: () => import("../views/IMCView.vue")
  },
  {
    path: '/calculadora',
    name: "calculadora",
    component: () => import("../views/CalculadoraView.vue")
  },
  {
    path: '/calcporcentagem',
    name: 'calcporcentagem',
    component: () => import("../views/PorcentagemView.vue")
  },
  {
    path: '/calcbin',
    name: "calcbin",
    component: () => import("../views/BinarioView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
