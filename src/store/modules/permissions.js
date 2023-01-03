import { getRoutes } from '@/api/menu'
import { constantRoutes } from '@/router'

export default {
  state: { sidebarRouters: [] },
  mutations: {
    SET_SIDEBAR_ROUTERS: (state, sidebarRouters) => {
      state.sidebarRouters = sidebarRouters
    }
  },
  actions: {
    GenerateRoutes ({ commit }) {
      return new Promise(resolve => {
        getRoutes().then(res => {
          commit('SET_SIDEBAR_ROUTERS', constantRoutes.concat(res.data))
          resolve(res)
        })
      })
    }
  }
}
