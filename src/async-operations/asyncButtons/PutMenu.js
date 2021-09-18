import React from "react";
import styles from "./PutMenu.module.scss";
import { putMenu } from "../requestFunctions";
import useHttp from "../useHttp";

export default function PutMenu() {
  const { sendRequest, status, data, error } = useHttp(putMenu, false);
  return (
    <>
      <button className={styles.btn} onClick={sendRequest}>
        PUT hardcoded menu on Firebase
      </button>
    </>
  );
}
