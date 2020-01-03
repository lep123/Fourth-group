import services from '@/services/api'
import { requestPost } from '@/utils/request'
import qs from 'qs'
//注册
export const resd = (option) => {
    return {
        type: 'DORES',
        payload: requestPost(services.dores,qs.stringify(option))
    }
}