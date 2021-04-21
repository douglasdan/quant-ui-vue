import {STOCK_QUERY, STOCK_INIT, STOCK_SYNC} from '@/services/api'
import {request, METHOD, removeAuthorization} from '@/utils/request'

export async function queryStock(cond) {
  return request(STOCK_QUERY, METHOD.POST, cond)
}

export async function initStock(cond) {
  return request(STOCK_INIT, METHOD.GET, cond)
}

export async function syncStockList(cond) {
  return request(STOCK_SYNC, METHOD.GET, cond)
}
