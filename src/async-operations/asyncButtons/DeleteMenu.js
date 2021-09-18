import React from "react";
import { deleteMenu } from "../requestFunctions";
import useHttp from "../useHttp";
import styles from "./DeleteMenu.module.scss";

export default function DeleteMenu() {
  const { sendRequest, status, data, error } = useHttp(deleteMenu, false);
  return (
    <>
      <button className={styles.btn} onClick={sendRequest}>
        DELETE menu from Firebase
      </button>
    </>
  );
}
