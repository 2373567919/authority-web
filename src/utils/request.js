import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import store from '@/store'

const isReLogin = {
  show: false
}
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000
})
service.interceptors.response.use(res => {
  const code = res.data.code
  const msg = res.data.msg
  if (code === 401) {
    if (!isReLogin.show) {
      isReLogin.show = true
      ElMessageBox.confirm('登录状态已过期,请重新登录', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        isReLogin.show = false
        store.dispatch('Logout').then(() => {
          location.href = '/index'
        })
      }).catch(() => {
        isReLogin.show = false
      })
    }
    return Promise.reject(new Error('无效的会话，或者回话已过期，请重新登录。'))
  } else if (code === 500) {
    ElMessage({
      message: msg,
      type: 'error'
    })
    return Promise.reject(new Error(msg))
  } else if (code !== 200) {
    return Promise.reject(new Error('err'))
  } else {
    return res.data
  }
}, error => {
  let { message } = error
  if (message.includes('timeout')) {
    message = '系统接口请求超时'
  } else if (message.includes('Request failed with status code')) {
    message = '系统接口' + message.substr(message.length - 3) + '异常'
  }
  ElMessage({
    message: message,
    type: 'error',
    duration: 5000
  })
  return Promise.reject(error)
})
service.interceptors.request.use(config => {
  const notToken = (config.headers || {}).notToken === true
  if (store.getters.token && !notToken) {
    config.headers.Authorization = 'Bearer ' + store.getters.token
  }
  return config
}, error => {
  ElMessage({
    message: error.message,
    type: 'error'
  })
  return Promise.reject(error)
})

export default service
