import utils from '~/utils/index'
 
export default function ({route, req, res, redirect}) {
  let isClient = process.client;
  // let isServer = process.server;

  // //在服务端
  // if (isServer) {
  //   let cookies = utils.getcookiesInServer(req)
  //   path = req.originalUrl;
  //   token = cookies.token ? cookies.token : ''
  // }
  //在客户端判读是否需要登陆
  if (isClient) {
    let redirectURL = '/login';
    var token, path
    token = utils.getcookiesInClient('auth')
    path = route.path;
    if (path) {
      redirectURL = '/login?ref=' + encodeURIComponent(path) + '&rd=' + Math.random()
    }
    //需要进行权限判断的页面开头
    if (!token) {
      redirect(redirectURL)
    }
  }
  
}