import React from "react";
import { getMenu } from "../requestFunctions";
import styles from "./GetMenu.module.scss";
import useHttp from "../useHttp";

export default function GetMenu() {
  const { sendRequest, status, data, error } = useHttp(getMenu, true);
  
  return (
    <>
      <button className={styles.btn} onClick={sendRequest}>
        GET existing menu from Firebase
      </button>
      {/* <p>Current status: {status}</p> */}
    </>
  );
}
