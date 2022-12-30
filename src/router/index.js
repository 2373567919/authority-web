import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import IndexLayout from '@/layout/IndexLayout.vue'

const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  }, {
    path: '',
    name: 'IndexLayout',
    component: IndexLayout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
