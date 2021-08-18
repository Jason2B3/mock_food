import React from "react";
import styles from "./ModalListItem.module.scss";
import { useCustomHook } from "../../GlobalContext";

function ModalListItem({ name, cost, qty, aTotal }) {
  const { dispatchFn } = useCustomHook();

  //% The next 2 handlers call the useReducer function to update the orderState variable
  const minusHandler = () => dispatchFn({ type: `REMOVE_1`, foodName: name });
  const plusHandler = () => dispatchFn({ type: `ADD_1`, foodName: name });
  return (
    <div className={styles.container}>
      <section className={styles.details}>
        <h4 className={styles.name}>{name}</h4>
        <span className={styles.cost}>{cost}</span>
        <span className={styles.qty}>x {qty}</span>
      </section>
      <div className={styles.masMenos}>
        <button onClick={minusHandler}>-</button>
        <button onClick={plusHandler}>+</button>
      </div>
    </div>
  );
}

export default ModalListItem;
