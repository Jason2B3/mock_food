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
  
  //# ------------------------------------------------------------
  const shareThese = { meals, dispatchFn, orderState };
  return (
    <CounterContext.Provider value={shareThese}>
      {props.children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
// ---------------------------------------------------------
const meals = {
  "Sushi":{
    descrip: "Finest fish and veggies",
    price: "$30.00",
  },
  "Schnitzel":{
    descrip: "A german specialty",
    price: "$16.50",
  },
  "Green Bowl":{
    descrip: "Healthy...and green...",
    price: "$28.00",
  }
}

const orderReducer = function (state, action) {
  switch (action.type) {
    case "SET MULTI SUSHI":
      const updatedState1A = {
        ...state, //# return initial state then override 1 value
        Sushi: state["Sushi"] + Number(action.orderSize),
      };
      return updatedState1A;
    case "ADD 1 SUSHI":
      const updatedState1B = {
        ...state,
        Sushi: state["Sushi"] + 1,
      };
      return updatedState1B;
    case "REMOVE 1 SUSHI":
      const updatedState1C = {
        ...state,
        Sushi: state["Sushi"] - 1,
      };
      return updatedState1C;
    // ----------------------------------
    case "SET MULTI SCHNITZEL":
      const updatedState2A = {
        ...state,
        Schnitzel: state["Schnitzel"] + Number(action.orderSize),
      };
      return updatedState2A;
    case "ADD 1 SCHNITZEL":
      const updatedState2B = {
        ...state,
        Schnitzel: state["Schnitzel"] + 1,
      };
      return updatedState2B;
    case "REMOVE 1 SCHNITZEL":
      const updatedState2C = {
        ...state,
        Schnitzel: state["Schnitzel"] - 1,
      };
      return updatedState2C;
    // ----------------------------------
    case "SET MULTI GREEN BOWL":
      const updatedState3A = {
        ...state,
        "Green Bowl": state["Green Bowl"] + Number(action.orderSize),
      };
      return updatedState3A;
    case "ADD 1 GREEN BOWL":
      const updatedState3B = {
        ...state,
        "Green Bowl": state["Green Bowl"] + 1,
      };
      return updatedState3B;
    case "REMOVE 1 GREEN BOWL":
      const updatedState3C = {
        ...state,
        "Green Bowl": state["Green Bowl"] - 1,
      };
      return updatedState3C;
    // ----------------------------------
    case "CONTRIB TO TOTAL":
      const updateBill = {
        ...state,
        Total: state["Total"] + action.aTotal,
      };
      console.log("cheque please!", updateBill);
      return updateBill;
    default:
      alert("fucked up");
      return state;
  }
};

