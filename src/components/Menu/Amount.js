import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Amount.module.scss";
import { orderActions } from "../../reduxToolkit/store-slices/manageOrder";

function Amount({ name, descrip, price }) {
  const dispatch = useDispatch();
  //% Make the value of the input field stateful
  const [qty, setQty] = useState(0);
  const tickHandler = function (e) {
    console.log(name);
    setQty(e.target.value); // non immediate updating still in effect
  };

  //% On-submit, use reducerFn in ContextAPI to track meal qty's in our cart
  const submitHandler = function (e) {
    e.preventDefault();
    if (qty > 0) {
      dispatch(orderActions.addMulti({ name, qty })); // supply payload to manageOrder.js
    }
    setQty(""); // clear input field
  };
  return (
    <form className={styles.form}>
      <label>Amount</label>
      <input
        // className={"input " + name}
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
