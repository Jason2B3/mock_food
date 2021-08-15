import React, { useState } from "react";
import styles from "./Amount.module.scss";

function Amount({ name, descrip, price }) {
  const [qty, setQty] = useState("0");
  const tickHandler = function (e) {
    setQty(e.target.value); // non immediate updating still in effect
  };
  const submitHandler = function (e) {
    e.preventDefault();
    // Send up the amount of your specific food to the context API
    // Have number of items reflect in cart as well
    let obj = {
      name: name,
      descrip: descrip,
      price: price,
      qty: qty,
    };
    console.log(obj);
  };
  return (
    <form className={styles.form}>
      <label>Amount</label>
      <input
        type="number"
        onChange={tickHandler}
        value={qty}
        step="1"
        min="0"
        max="99"
      ></input>
      <button onClick={submitHandler} type="submit">
        Add to cart
      </button>
    </form>
  );
}

export default Amount;
