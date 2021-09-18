import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu", // expected built-in KVP
  initialState: { shouldRender: "greeting", data: null, errorMessage: null },
  reducers: {
    clearMenu(state, action) {
      // Use to render a greeting, telling users to send dta to Firebase
      state.shouldRender = "greeting";
      state.data = null;
      state.errorMessage = null;
    },
    pendingMenu(state, action) {
      // Use to render a spinner during the pending stage on App.js
      state.shouldRender = "spinner";
      state.data = null;
      state.errorMessage = null;
    },
    successMenu(state, action) {
      // Use to render a successful menu on App.js
      state.shouldRender = "menu";
      state.data = action.payload;
      state.errorMessage = null;
    },
    noMenuDataFound(state, action) {
      // Use to render a "no results" message on App.js
      state.shouldRender = "GET_noResults";
      state.data = null;
      state.errorMessage = null;
    },
    failMenu(state, action) {
      // Use to render an "error" message on App.js
      state.shouldRender = "GET_errorMessage";
      state.errorMessage = action.payload;
    },
  },
});
export const menuActions = menuSlice.actions;

export default menuSlice.reducer; // the only line not part of the cutout
