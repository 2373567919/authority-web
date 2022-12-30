import router from './router'
import { getToken } from '@/utils/auth'
import store from '@/store'
import { ElMessage } from 'element-plus'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => {
          next()
        }).catch(err => {
          ElMessage.error(err.message)
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  }
})
