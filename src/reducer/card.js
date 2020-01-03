const card = {
    card:[]
}

export default function cards(state = card, action) {
    switch (action.type) {
        case 'POST_LOGIN':
            console.log(action,'-----------')
            return {...state,card:[...state.card, ...action.payload.data.pois]}
        default:
            return state
    }
}
// return {...state,card:action.payload.data.result.list}