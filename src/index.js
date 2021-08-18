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

if(module.hot){
  module.hot.accept('./App', ()=>{
    const NextApp= require('./App').defaultReactDOM.render(<NextApp/>,rootEl)
  })
}