import request from '@/utils/request'

export function getCodeImg () {
  return request({
    url: '/captchaImage',
    method: 'get',
    timeout: 20000,
    headers: {
      notToken: true
    }
  })
}

export function login (username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/login',
    method: 'post',
    data: data,
    headers: {
      notToken: true
    }
  })
}

export function getInfo () {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}
