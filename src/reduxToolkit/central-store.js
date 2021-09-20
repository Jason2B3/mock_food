import { createSlice, configureStore } from "@reduxjs/toolkit";
import menuReducer from "./store-slices/menu"; // a slice's default export but renamed
import orderReducer from "./store-slices/manageOrder";
const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
  },
});

export default store;
