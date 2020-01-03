import services from '@/services/api'
import { requestPost } from '@/utils/request'
import qs from 'qs'
export function login (items) {
    return{
        type: 'POST_LOGIN',
        payload: requestPost(services.dologin, qs.stringify(items))
    }
}


