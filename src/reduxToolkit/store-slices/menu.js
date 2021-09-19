import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu", // expected built-in KVP
  initialState: {
    shouldRender: "initial",
    data: null,
    errorMessage: null,
    successMessage: "Send data to Firebase! Then you can display a Menu",
  },
  reducers: {
    //# -------- GET reducer functions ----------
    GET_pending(state, action) {
      // Use to render a spinner during the pending stage on App.js
      state.shouldRender = "GET_pending";
      state.data = null;
      state.errorMessage = null;
      state.successMessage = null;
    },
    GET_noResults(state, action) {
      // Use to render a "no results" message on App.js
      state.shouldRender = "GET_noResults";
      state.data = null;
      state.errorMessage =
        "No results found in our servers. Send some up first!";
      state.successMessage = null;
    },
    GET_failure(state, action) {
      // Use to render an "error" message on App.js
      state.shouldRender = "GET_failure";
      state.data = null;
      state.errorMessage = "Could not retieve meal data";
      state.successMessage = null;
    },
    GET_success(state, action) {
      // Use to render a successful menu on App.js
      state.shouldRender = "GET_success";
      state.data = action.payload; // need payload info here to access data usehttp returns
      state.errorMessage = null;
      state.successMessage = null;
    },
    //# -------- PUT reducer functions ----------
    PUT_success(state, action) {
      state.shouldRender = "PUT_success";
      state.data = null;
      state.errorMessage = null;
      state.successMessage = "Successfully sent data to Firebase";
    },
    PUT_failure(state, action) {
      state.shouldRender = "PUT_failure";
      state.data = null;
      state.errorMessage = "Could not send data to Firebase";
      state.successMessage = null;
    },
    //# -------- DELETE reducer functions ----------
    DELETE_success(state, action) {
      state.shouldRender = "initial"; // go back to how state was on startup
      state.data = null;
      state.errorMessage = null;
      state.successMessage =
        "Send data to Firebase! Then you can display a Menu";
    },
    DELETE_failure(state, action) {
      state.shouldRender = "DELETE_failure";
      state.data = null;
      state.errorMessage = "failed to delete data in Firebase";
      state.successMessage = null;
    },
  },
});
export const menuActions = menuSlice.actions;

export default menuSlice.reducer; // the only line not part of the cutout
