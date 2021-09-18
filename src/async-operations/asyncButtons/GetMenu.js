import React, { useEffect } from "react";
import { getMenu } from "../requestFunctions";
import styles from "./GetMenu.module.scss";
import useHttp from "../useHttp";
// Redux imports
import { useDispatch } from "react-redux";
import { menuActions } from "../../reduxToolkit/store-slices/menu";

export default function GetMenu() {
  const dispatch = useDispatch();
  // Add extra capabilities to the simple getMenu async function we imported
  const { sendRequest, status, data, error } = useHttp(getMenu, false);
  // Dispatching async actions from redux store's menu.js 
  // These are dependent on the state values from useHttp
  useEffect(()=>{
    async function runAsyncRedux(){
      if (status === "pending") {
        console.log("pending")
        await dispatch(menuActions.pendingMenu());
        return;
      }
      if (error && status === "completed") {
        console.log('error encountered')
        await dispatch(menuActions.failMenu(error)); 
        return;
      }
      if (data === null && status === "completed") {
        console.log("nothing found")
        await dispatch(menuActions.noMenuDataFound());
        return;
      }
      if (data !== null && status === "completed") {
        console.log("success!")
        await dispatch(menuActions.successMenu(data));
        return;
      }
    }
    runAsyncRedux()
  },[sendRequest, status, data, error])
  
  return (
    <>
      <button className={styles.btn} onClick={sendRequest}>
        GET existing menu from Firebase
      </button>
      {/* <p>Current status: {status}</p> */}
    </>
  );
}

//# GOALS
// 1) When the status changes to pending, we need to notify App.js so it renders a spinner
// 2) When the status changes to completed and error is not null, and
