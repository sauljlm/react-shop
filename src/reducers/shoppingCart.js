const shoppingCartReducer = (state = [], action) => {
  switch(action.type) {
    case 'PUSH' :
      return [
        ...state,
        action.payload
      ]

    case 'REMOVE' :
      return state.filter((item, index) => index !== action.payload)

    case 'DROP' :
      return state = []

    default :
      return state;
  }
}

export default shoppingCartReducer;
