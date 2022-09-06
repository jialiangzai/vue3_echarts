import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/page',
    name: 'page',
    component: () => import('../views/home.vue')
  },
  {
    path: '/',
    redirect: '/page'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
