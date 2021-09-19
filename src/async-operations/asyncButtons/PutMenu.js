import React, { useEffect } from "react";
import styles from "./PutMenu.module.scss";
import { putMenu } from "../requestFunctions";
import useHttp from "../useHttp";
// Redux imports
import { useDispatch } from "react-redux";
import { menuActions } from "../../reduxToolkit/store-slices/menu";

export default function PutMenu() {
  const dispatch = useDispatch();
  const { sendRequest, status, data, error } = useHttp(putMenu, false);
  console.log(status, data, error);
  useEffect(() => {
    async function runAsyncRedux() {
      // Want things to render on success and failure only (no pending)
      //# Failed PUT request
      if (error && status === "completed") {
        console.log("error encountered");
        await dispatch(menuActions.PUT_failure(error));
        return;
      }
      //# Successful PUT request
      if (error === null && status === "completed") {
        console.log("success!");
        await dispatch(menuActions.PUT_success());
        return;
      }
    }
    runAsyncRedux();
  }, [sendRequest, status, data, error]);
  return (
    <>
      <button className={styles.btn} onClick={sendRequest}>
        PUT hardcoded menu on Firebase
      </button>
    </>
  );
}
