import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CounterContextProvider from "./GlobalContext";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./reduxToolkit/central-store";
ReactDOM.render(
  <BrowserRouter>
    <CounterContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CounterContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
