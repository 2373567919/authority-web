import { createStore } from 'vuex'
import user from './modules/user'
import permissions from '@/store/modules/permissions'
import getters from '@/store/getters'

export default createStore({
  getters,
  modules: {
    user,
    permissions
  }
})
