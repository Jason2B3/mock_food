import React from "react";
import styles from "./ModalListItem.module.scss";
import { useCustomHook } from "../../GlobalContext";

function ModalListItem({ name, cost, qty, aTotal }) {
  const { dispatchFn } = useCustomHook();
  
  //% The next 2 handlers call the useReducer function to update the orderState variable
  const minusHandler = () =>
    dispatchFn({ type: `REMOVE 1 ${name.toUpperCase()}` });
  const plusHandler = () => dispatchFn({ type: `ADD 1 ${name.toUpperCase()}` });
  return (
    <div>
      <section className={styles.details}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.cost}>{cost}</p>
        <p className={styles.qty}>x {qty}</p>
        <p className={styles.aTotal}>{aTotal}</p>
      </section>
      <div className={styles.masMenos}>
        <button onClick={minusHandler}>-</button>
        <button onClick={plusHandler}>+</button>
      </div>
    </div>
  );
}

export default ModalListItem;
