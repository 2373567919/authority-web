import jsCookie from 'js-cookie'

const tokenKey = 'admin-token'

export function setToken (token) {
  return jsCookie.set(tokenKey, token)
}

export function getToken () {
  return jsCookie.get(tokenKey)
}

export function removeToken () {
  return jsCookie.remove(tokenKey)
}
