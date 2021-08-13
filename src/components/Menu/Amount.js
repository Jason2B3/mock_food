import React from "react";
import styles from "./Amount.module.scss";

function Amount() {
  return (
    <form>
      <label>Amount</label>
      <input type="number" step="1"></input>
      <div>
        <button type="submit">+ Add</button>
      </div>
    </form>
  );
}

export default Amount;
