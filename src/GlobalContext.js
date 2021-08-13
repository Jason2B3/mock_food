import { useState, createContext, useContext } from "react"; // import useContext
const CounterContext = createContext();
export const useCustomHook = () => useContext(CounterContext); // export custom hook

function CounterContextProvider(props) {
  const meals = [
    { name: "Sushi", descrip: "Finest fish and veggies", price: "$22.99" },
    { name: "Schnitzel", descrip: "A german specialty", price: "$16.50" },
    { name: "Green Bowl", descrip: "Healthy...and green...", price: "$28.99" },
  ];
  const shareThese = { meals };
  return (
    <CounterContext.Provider value={shareThese}>
      {props.children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
