import React from "react";
import styles from "./OrderPage.module.scss";
// Component imports
import Name from "./Name";
import Street from "./Street";
import PostalCode from "./PostalCode";
import City from "./City";
import { useHistory } from "react-router-dom";
import { useCustomHook } from "../../GlobalContext";

export default function OrderPage() {
  const { deactivateModal } = useCustomHook();
  const history = useHistory();
  const cancelHandler = () => {
    deactivateModal();
    history.push("/");
  };
  const confirmHandler = () => {
    alert("New features on the way!");
  };
  return (
    <div className={styles.container}>
      <Name />
      <Street />
      <PostalCode />
      <City />
      <div>
        <button className={styles.btn} onClick={cancelHandler}>
          Cancel
        </button>
        <button className={styles.btn} onClick={confirmHandler}>
          Confirm and Order
        </button>
      </div>
    </div>
  );
}
