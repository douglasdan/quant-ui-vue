import routerMap from './router.map'
import {parseRoutes} from '@/utils/routerUtil'

// 异步路由配置
const routesConfig = [
  'login',
  'nssb',
  {
    router: 'exp404',
    path: '*',
    name: '404'
  },
  {
    router: 'exp403',
    path: '/403',
    name: '403'
  },
  {
    router: 'risk1',
    path: '/risk1',
    name: 'risk1'
    
  },
  {
    router: 'risk2',
    path: '/risk2',
    name: 'risk2'
  },
  {
    router: 'zzsbb',
    path: '/zzsbb',
    name: 'zzsbb'
  },
  {
    router: 'qysdsbb',
    path: '/qysdsbb',
    name: 'qysdsbb'
  },

  {
    router: 'demo',
    path: '/demo',
    name: 'demo'
  }
]

const options = {
  routes: parseRoutes(routesConfig, routerMap)
}

export default options
