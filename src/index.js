import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import CounterContextProvider from "./GlobalContext"
ReactDOM.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>,
  document.getElementById("root")
);
