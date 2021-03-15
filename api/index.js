import axios from 'axios'

const service = axios.create({
  baseURL: '/api/', // process.env.BASE_API, // api的base_url
  timeout: 5000, // 请求超时时间
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  // 请求头处理，设置传给后台的参数格式，有form和json格式，这样写是form格式，application/json是json格式
  withCredentials: true
})

export function logout () {
  return service.post('logout')
}

export function login (data) {
  return service.post('login', data)
}

export function getMenus () {
  return service.get('menus')
}