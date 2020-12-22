import {LOGIN, ROUTES} from '@/services/api'
import {request, METHOD, removeAuthorization} from '@/utils/request'

export async function selectFlow(cond) {
  return request(FLOW_QUERY, METHOD.POST, cond)
}