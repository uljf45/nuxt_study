export const state = () => ({
  menus: '',
  auth: '',
  count: '',
  ip: '',
  nuxtIp: '',
})

export const mutations = {
  setMenus (state, menus) {
    state.menus = menus
  },
  setAuth (state, auth) {
    state.auth = auth
  },
  setCount (state, count) {
    state.count = count
  },
  setIp (state, ip) {
    state.ip = ip
  },
  setNuxtIp (state, ip) {
    state.nuxtIp = ip
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req, app }) {
    const { data } = await app.$axios.get('http://localhost:3000/menus')
    commit('setMenus', data)
    if (req.headers.cookie) {
      let cookie = req.headers.cookie
      let authFind = cookie.split(';').map(item => {
        return item.split('=')
      }).find(item => {
        return item[0].trim() == 'auth'
      })
      let auth = authFind && authFind[1]
      commit('setAuth', auth)
    }

    const ip = req.headers['bigo-x-client-source-ip'] ||
    req.headers['x-real-ip'] ||
    req.connection.remoteAddress;
    commit('setIp', ip)
    commit('setNuxtIp', process.env.IP)
  }
}
