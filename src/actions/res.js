import services from '@/services/api'
import { requestPost } from '@/utils/request'
//注册
export const resd = (option) => {
    return {
        type: 'DORES',
        payload: requestPost(services.dores,option)
    }
}