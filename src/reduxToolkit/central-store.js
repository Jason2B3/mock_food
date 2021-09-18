import { createSlice, configureStore } from "@reduxjs/toolkit";
import menuReducer from "./store-slices/menu"; // a slice's default export but renamed

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;
