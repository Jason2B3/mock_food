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
  useEffect(() => {
    async function runAsyncRedux() {
      //# Pending GET request
      if (status === "pending") {
        await dispatch(menuActions.GET_pending());
        return;
      }
      //# Failed GET request
      if (status === "completed" && error) {
        await dispatch(menuActions.GET_failure());
        return;
      }
      //# Successful GET request but the database is empty
      if (data === null && status === "completed") {
        await dispatch(menuActions.GET_noResults());
        return;
      }
      //# Successful GET request where we retrieve meal data
      if (data !== null && status === "completed") {
        await dispatch(menuActions.GET_success(data));
        return;
      }
    }
    runAsyncRedux();
  }, [sendRequest, status, data, error]);

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
