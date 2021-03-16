export const state = () => ({
  menus: '',
  auth: '',
  count: '',
  ip: '',
  nuxtIp: '',
  contextFromNuxtServerInit: '',
  domainName: '',
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
  },
  setContextFromNuxtServerInit (state, payload) {
    state.contextFromNuxtServerInit = payload
  },
  setDomainName (state, payload) {
    state.domainName = payload
  }
}

function myStringiFy(o) {
  let cache = []
  let str = JSON.stringify(o, function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        return
      }
      cache.push(value)
    }
    return value
  })
  return str
}

export const actions = {
  async nuxtServerInit ({ commit }, context) { // vuex-context, nuxt context
    console.log('LifeCycle nuxtServerInit', new Date())
    const {req, app} = context
    commit('setContextFromNuxtServerInit',myStringiFy(context))
    // Object.keys(context).forEach(v => console.log(v))

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
    commit('setDomainName', process.env.DOMAIN_NAME)
  }
}
