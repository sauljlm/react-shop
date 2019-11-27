const shopingCarReducer = (state = [], action) => {
  switch(action.type) {
    case 'PUSH' :
      return state.push(action.payload);
    default :
      return state;
  }
}

export default shopingCarReducer;
