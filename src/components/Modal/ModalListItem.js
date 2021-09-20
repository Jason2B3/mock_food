import React from "react";
import styles from "./ModalListItem.module.scss";
import { useDispatch } from "react-redux";
import { orderActions } from "../../reduxToolkit/store-slices/manageOrder";
function ModalListItem({ name, cost, qty, aTotal }) {
  const dispatch = useDispatch();

  //% The next 2 handlers update the orderState variable in our Redux store
  // payload requires the meal name, which we got from ModalFace.js via props
  const minusHandler = () => dispatch(orderActions.subtractOne({ name }));
  const plusHandler = () => dispatch(orderActions.addOne({ name }));
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
