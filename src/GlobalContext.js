import { useState, createContext, useContext, useReducer } from "react"; // import useContext
const CounterContext = createContext();
export const useCustomHook = () => useContext(CounterContext); // export custom hook

function CounterContextProvider(props) {
  //% Track the total number of each dish in the user's cart right now
  const [orderState, dispatchFn] = useReducer(reducerFn, {
    Sushi: 0,
    // "Sushi price": "$22.99",
    Schnitzel: 0,
    // "Schnitzel price": "$16.50",
    "Green Bowl": 0,
    // "Green Bowl price": "$28.99",
  });

  const shareThese = { meals, dispatchFn, orderState };
  return (
    <CounterContext.Provider value={shareThese}>
      {props.children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
//# --------------------------------------------------------------------------
const meals = [
  {
    name: "Sushi",
    descrip: "Finest fish and veggies",
    price: "$22.99",
  },
  {
    name: "Schnitzel",
    descrip: "A german specialty",
    price: "$16.50",
  },
  {
    name: "Green Bowl",
    descrip: "Healthy...and green...",
    price: "$28.99",
  },
];

const reducerFn = function (state, action) {
  switch (action.type) {
    case "ADD SUSHI":
      // console.log("sushi fired", {
      //   ...state,
      //   Sushi: state["Sushi"] + Number(action.orderSize),
      // });
      return {
        ...state, //# return initial state then override 1 value
        Sushi: state["Sushi"] + Number(action.orderSize),
      };
    case "ADD SCHNITZEL":
      // console.log("schnit fired", {
      //   ...state,
      //   Schnitzel: state["Schnitzel"] + Number(action.orderSize),
      // });
      return {
        ...state,
        Schnitzel: state["Schnitzel"] + Number(action.orderSize),
      };
    case "ADD GREEN BOWL":
      // console.log("green bowl fired", {
      //   ...state,
      //   "Green Bowl": state["Green Bowl"] + Number(action.orderSize),
      // });
      return {
        ...state,
        "Green Bowl": state["Green Bowl"] + Number(action.orderSize),
      };
    default:
      alert("fucked up");
      return state;
  }
};
