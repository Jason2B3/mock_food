import React, { useState, useCallback } from "react";
import styles from "./Name.module.scss"
export default function Name() {
  const [nameValidity, setNameValidity] = useState("untouched");
  const invalidMessage = "The entered name is not valid";
  const label = "Name:";
  const verifyFN = useCallback(function (inputVal) {
    if (inputVal.trim() === "") {
      console.log("invalid");
      setNameValidity(false); // set to false if it's blank or whitespace
      return;
    }
    setNameValidity(true);
    console.log("valid");
    return;
  }, []);

  //% We could use the useInput hook here, but we don't for a CSS-related reason
  //% We have to style all <input> fields produced by it the same way
  //% The name input field on top needs a different margin-top than all the others
  const [inputValue, setInputValue] = useState("");
  // Conditional JSX and Classes
  const inputClass = !nameValidity ? styles.invalid : styles.valid;
  let failureText = !nameValidity ? (
    <p className={styles["error-text"]}>{invalidMessage}</p>
  ) : (
    ""
  );

  return (
    <div className={styles["form-control"]}>
      <div>
        <label htmlFor="name" className={styles.label}>{label}</label>
      </div>
      <input
        type="text"
        id="name"
        className={inputClass} // class name placed here
        value={inputValue}
        onBlur={(e) => verifyFN(e.target.value)} // when you lose focus, verify if input's valid
        onChange={(e) => {
          setInputValue(e.target.value); // delayed state update
          verifyFN(e.target.value); // verify email with event obj instead of state
        }}
      />
      {failureText} {/* failure text appears under the input field */}
    </div>)
}
