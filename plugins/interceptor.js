import Cookie from 'js-cookie'

export default ({app, store, route, redirect, req, router, $axios }) => {
  let auth = null
  if (process.client) {
    // 用户端
    auth = Cookie.get('auth')
  }

  $axios.onRequest(config => {
    config.withCredentials = true
    if (process.client) {
      if (auth) config.headers.authorization = auth
    }

    if (process.server) {
      // 服务端
    }
    return config;
  });

  $axios.onResponse(response => {
    if (process.client) {
    }
    if (response.data.code == 401) {
      Cookie.remove('auth')
      Cookie.remove('name')
      Cookie.remove('token')
      if (process.server) {
        if (req && req.url) {
          redirect('/login?ref=' + req.url)
        } else {
          redirect('/login')
        }
      }
      
    } else if (response.data.code == 404) {
      redirect('/')
    } else {
      return response;
    }
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    // switch (code) 分情况处理
  });
};
