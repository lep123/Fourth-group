const initState = {
  cardData: [],
}

export default function login(state = initState, action) {
  switch (action.type) {
      case 'SET_CARDDATA':
          console.log(action.payload, 'action');
          return { ...state, cardData:action.payload }
  
      default:
          return state
  }
}