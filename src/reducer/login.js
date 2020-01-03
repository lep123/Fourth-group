const initState = {
    name: ''
}
export default function login(state = initState, action) {
    switch (action.type) {
        case 'POST_LOGIN':
            return { ...state, name: action.payload}
        default:
            return state
    }
}