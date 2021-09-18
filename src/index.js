import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CounterContextProvider from "./GlobalContext";
import { Provider } from "react-redux";
import store from "./reduxToolkit/central-store";
ReactDOM.render(
  <CounterContextProvider>
  <Provider store={store}>
    <App />
    </Provider>
  </CounterContextProvider>
  ,
  document.getElementById("root")
);
