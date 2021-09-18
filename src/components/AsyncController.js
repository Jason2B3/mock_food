import React from "react";
import styles from "./AsyncController.module.scss";
// Component imports
import GetMenu from "../async-operations/asyncButtons/GetMenu";
import PutMenu from "../async-operations/asyncButtons/PutMenu";
import DeleteMenu from "../async-operations/asyncButtons/DeleteMenu";

export default function AsyncController() {
  return (
    <div className={styles.container}>
      <PutMenu className={`${styles.putButton} btn`} />
      <GetMenu className={`${styles.getButton} btn`} />
      <DeleteMenu className={`${styles.deleteButton} btn`} />
    </div>
  );
}
