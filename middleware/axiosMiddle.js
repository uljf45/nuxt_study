//解析浏览器中的cookies

function getCookie (name, strCookie = "") {
 
  var arrCookie = strCookie.split(';')
 
  for (var i = 0; i < arrCookie.length; i++) {
 
    var arr = arrCookie[i].split('=')
 
    if (arr[0].trim() === name) {
 
      return arr[1]
 
    }
 
  }
 
  return ""
}

export default function({req, res, $axios}) {
  if (req && req.headers !== undefined) {
    let cookieArr = req.headers.cookie

    const getUserName = getCookie('name', cookieArr)
    const getAuth = getCookie('auth', cookieArr)

    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')

    if (getAuth) {
      $axios.setHeader('authorization', getAuth)
      // axios.defaults.headers.authorization = getAuth
    }
  }

  
}