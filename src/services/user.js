import {LOGIN, ROUTES} from '@/services/api'
import {request, METHOD, removeAuthorization} from '@/utils/request'

/**
 * 登录服务
 * @param name 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function login(name, password) {
  return request(LOGIN, METHOD.POST, {
    userAccount: name,
    password: password
  })
}

function generateRouteTree(menu) {
  if (menu.virtual) {
    return generateRouteTree(menu.children ? menu.children : [])
  }
  else if (Array.isArray(menu)) {
    return menu.map(a => generateRouteTree(a))
  }
  else {
    let a = {}
    a.router = menu.menuPath
    a.name = menu.menuName
    a.children = generateRouteTree(menu.children)
    return a
  }
}

export async function getRoutesConfig() {
  return request(ROUTES, METHOD.GET).then(ret => {
    
    let result = {}
    result.data = [{
      redirectTo: '',
      router: 'root',
      children: []
    }]
    result.data[0].redirectTo = ret.data.redirectTo
    result.data[0].children = generateRouteTree(ret.data.menuTree.root)
    console.log(result)
    return {success:true, data: result}
  })
}

/**
 * 退出登录
 */
export function logout() {
  localStorage.removeItem(process.env.VUE_APP_ROUTES_KEY)
  localStorage.removeItem(process.env.VUE_APP_PERMISSIONS_KEY)
  localStorage.removeItem(process.env.VUE_APP_ROLES_KEY)
  removeAuthorization()
}
export default {
  login,
  logout,
  getRoutesConfig
}