import React from "react";
import styles from "./FinalSum.module.scss";
import { useCustomHook } from "../../GlobalContext";

function FinalSum({ billTotal }) {
  const { deactivateModal } = useCustomHook();
  const closeHandler = function () {
    deactivateModal();
  };
  const orderHandler = function () {
    alert("New Features will arrive soon!");
  };
  return (
    <div className={styles.container}>
      <p>
        <span>Total Amount: </span>
        <span>${billTotal}</span>
      </p>
      <div>
        <button onClick={closeHandler}>Close</button>
        <button onClick={orderHandler}>Order</button>
      </div>
    </div>
  );
}

export default FinalSum;
// finalVerdict
