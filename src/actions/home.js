import { requestPost } from '@/utils/request'
import Apis from '@/services/api'
export function login (items) {
    return{
        type: 'SET_CARDDATA',
        payload: requestPost(Apis.getCartData, items)
    }
}


