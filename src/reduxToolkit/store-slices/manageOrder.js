import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "menu", // expected built-in KVP
  initialState: {
    Sushi: 0,
    Schnitzel: 0,
    "Green Bowl": 0,
  },
  reducers: {
    addMulti(state, action) {
      let foodName = action.payload.name;
      const qty = action.payload.qty;
      state[foodName] = state[foodName] + qty;
    },
    addOne(state, action) {
      let foodName = action.payload.name;
      state[foodName] = state[foodName] + 1;
    },
    subtractOne(state, action) {
      let foodName = action.payload.name;
      state[foodName] = state[foodName] - 1;
    },
  },
});
export const orderActions = orderSlice.actions;

export default orderSlice.reducer; // the only line not part of the cutout
