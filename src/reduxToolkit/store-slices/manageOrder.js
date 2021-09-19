import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "menu", // expected built-in KVP
  initialState: {
    Sushi: 0,
    Schnitzel: 0,
    "Green Bowl": 0,
  },
  reducers: {
    //! You may be abe to reduce alot of these reducer functions
    addSushi(state, action) {
      state["Sushi"] = state["Sushi"]++;
      state["Schnitzel"] = state["Schnitzel"];
      state["Green Bowl"] = state["Green Bowl"];
    },
    removeSushi(state,action){
      state["Sushi"] = state["Sushi"]--;
      state["Schnitzel"] = state["Schnitzel"];
      state["Green Bowl"] = state["Green Bowl"];
    },
    addShnitzel(state,action){
      state["Sushi"] = state["Sushi"];
      state["Schnitzel"] = state["Schnitzel"]++;
      state["Green Bowl"] = state["Green Bowl"];
    },
    removeShnitzel(state,action){
      state["Sushi"] = state["Sushi"];
      state["Schnitzel"] = state["Schnitzel"]--;
      state["Green Bowl"] = state["Green Bowl"];
    },
    addGreenBowl(state,action){
      state["Sushi"] = state["Sushi"];
      state["Schnitzel"] = state["Schnitzel"];
      state["Green Bowl"] = state["Green Bowl"]++;
    },
    removeGreenBowl(state,action){
      state["Sushi"] = state["Sushi"];
      state["Schnitzel"] = state["Schnitzel"];
      state["Green Bowl"] = state["Green Bowl"]--;
    },
  },
});
export const orderActions = orderSlice.actions;

export default orderSlice.reducer; // the only line not part of the cutout