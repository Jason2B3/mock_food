import React, { useEffect } from "react";
import { deleteMenu } from "../requestFunctions";
import useHttp from "../useHttp";
import styles from "./DeleteMenu.module.scss";
// Redux imports
import { useDispatch } from "react-redux";
import { menuActions } from "../../reduxToolkit/store-slices/menu";

export default function DeleteMenu() {
  const dispatch = useDispatch();
  const { sendRequest, status, data, error } = useHttp(deleteMenu, false);
  useEffect(() => {
    async function runAsyncRedux() {
      // Want things to render on success and failure only (no pending)
      if (status === "completed" && error === null) {
        dispatch(menuActions.DELETE_success());
      }
      if (status === "completed" && error !== null) {
        dispatch(menuActions.DELETE_failure());
      }
    }
    runAsyncRedux();
  }, [sendRequest, status, data, error]);
  return (
    <>
      <button className={styles.btn} onClick={sendRequest}>
        DELETE menu from Firebase
      </button>
    </>
  );
}
