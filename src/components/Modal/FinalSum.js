import React from "react";
import styles from "./FinalSum.module.scss";
import { useCustomHook } from "../../GlobalContext";
import { useHistory } from "react-router-dom";

function FinalSum({ billTotal }) {
  const history = useHistory();
  const { deactivateModal } = useCustomHook();
  const closeHandler = function () {
    deactivateModal();
  };
  const orderHandler = function () {
    history.push("/confirm-details");
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
