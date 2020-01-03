import { requestGet } from '@/utils/request'
import Apis from '@/services/api'
export function getCartData (items) {
    return{
        type: 'SET_CARDDATA',
        payload: requestGet('http://api.baxiaobu.com/index.php/home/v5/getuser', items)
    }
}


