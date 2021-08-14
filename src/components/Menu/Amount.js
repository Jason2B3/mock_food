import React from "react";
import styles from "./Amount.module.scss";

function Amount() {
  return (
    <form className={styles.form}>
      <label>Amount</label>
      <input type="number" step="1" min="0" max="99"></input>
      <div type="submit">Add to cart</div>
    </form>
  );
}

export default Amount;
