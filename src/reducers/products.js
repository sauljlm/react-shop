const productsReducer = (state = null, action) => {
  switch(action.type) {
    case 'INITIAL' :
      return state = action.payload
    default :
      return state;
  }
}

export default productsReducer;
