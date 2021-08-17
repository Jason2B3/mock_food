import React, { useState } from "react";
import styles from "./Amount.module.scss";
import { useCustomHook } from "../../GlobalContext";

function Amount({ name, descrip, price }) {
  const { dispatchFn } = useCustomHook();
  //% Make the value of the input field stateful
  const [qty, setQty] = useState("0");
  const tickHandler = function (e) {
    setQty(e.target.value); // non immediate updating still in effect
  };

  //% On-submit, use reducerFn in ContextAPI to track meal qty's in our cart
  const submitHandler = function (e) {
    e.preventDefault();
    if (qty > 0) {
      dispatchFn({ type: "SET MULTI " + name.toUpperCase(), orderSize: qty }); // contextAPI
      setQty(0); // reset field
    }
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
