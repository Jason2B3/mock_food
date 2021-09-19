import { useState, createContext, useContext, useReducer } from "react"; // import useContext
const CounterContext = createContext();
export const useCustomHook = () => useContext(CounterContext); // export custom hook

function CounterContextProvider(props) {
  //% Track the total number of each dish in the user's cart right now
  const [orderState, dispatchFn] = useReducer(orderReducer, {
    Sushi: 0,
    Schnitzel: 0,
    "Green Bowl": 0,
  });
  const [isModalActivated, setModal] = useState(false);
  const activateModal = () => setModal(() => true);
  const deactivateModal = () => setModal(() => false);
  //# ------------------------------------------------------------
  const shareThese = {
    dispatchFn,
    orderState,
    isModalActivated,
    activateModal,
    deactivateModal,
  };
  return (
    <CounterContext.Provider value={shareThese}>
      {props.children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
// ---------------------------------------------------------

const orderReducer = function (state, action) {
  switch (action.type) {
    //$ Add multiple orders of food to the cart (when the add to cart button is pressed)
    case "SET_MULTI":
      const foodNameA = action.foodName; // decides what food's getting updated
      const updatedStateA = {
        ...state, //# return initial state then override 1 value
      };
      updatedStateA[foodNameA] = state[foodNameA] + Number(action.orderSize);
      return updatedStateA;
    //$ Add 1 order of food to the cart (when the + button is pressed)
    case "ADD_1":
      const foodNameB = action.foodName; // decides what food's getting updated
      const updatedStateB = {
        ...state,
      };
      updatedStateB[foodNameB] = state[foodNameB] + 1;
      return updatedStateB;
    //$ Remove 1 order of food from the cart (when the - button is pressed)
    case "REMOVE_1":
      const foodNameC = action.foodName;
      const updatedStateC = {
        ...state,
      };
      updatedStateC[foodNameC] = state[foodNameC] - 1;
      return updatedStateC;
    //$ ——————————————————————————————————————————————————————
    case "CONTRIB TO TOTAL":
      const updateBill = {
        ...state,
        Total: state["Total"] + action.aTotal,
      };
      console.log("cheque please!", updateBill);
      return updateBill;
    //$ ——————————————————————————————————————————————————————
    default:
      alert("fucked up");
      return state;
  }
};
