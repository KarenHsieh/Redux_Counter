
const initialState = {
  count: 0
}

function reducer( state = initialState, action) {

  
	if ( action.type === 'INCREMENT' ) {
    return {
      count: state.count + 1
    }
  } else if ( action.type === 'DECREMENT' ) {
    const num = state.count - 1;
    if(num === -1) return state;
    return {
      count: num
    }
  }
  return state;
}

export default reducer;