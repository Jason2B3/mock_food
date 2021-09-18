const stateObj = {
  menuIsLoaded: false,
  menuData: null	
    // store a stateful variable that'll be displayed as the incrementor value
};
export const menuReducer = function (state = stateObj, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "incrementMore":
      return { ...state, counter: state.counter + action.amount }; // USE PAYLOAD
  }
  return state;
};