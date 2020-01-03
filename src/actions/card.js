import { requestPost, requestGet } from '@/utils/request'

export function cards (items = {}) {
    console.log(items)
    return{
        type: 'POST_CART',
        // payload: requestPost('/aps/Home/Apis/listWithPage', items)
        payload:requestGet('https://restapi.amap.com/v3/place/text',items)
    }
}


