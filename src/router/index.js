import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import IndexLayout from '@/layout/IndexLayout.vue'
import IndexView from '@/views/IndexView.vue'

export const constantRoutes = [
  {
    path: '/login',
    name: 'LoginView',
    hidden: true,
    component: LoginView
  }, {
    path: '',
    name: 'IndexLayout',
    hidden: true,
    component: IndexLayout
  },
  {
    path: '/index',
    name: 'index',
    component: IndexView,
    meta: {
      title: '首页',
      icon: 'dashboard'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
