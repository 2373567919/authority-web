
export default {
  roles: state => state.user.roles,
  token: state => state.user.token,
  sidebarRouters: state => state.permissions.sidebarRouters
}
