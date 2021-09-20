import React, { useState, useCallback } from "react";
import styles from "./useInput.module.scss";

function useInput(inputValid, verifyFN, label, invalidMessage) {
  const [inputValue, setInputValue] = useState("");
  // Conditional JSX and Classes
  const inputClass = !inputValid ? styles.invalid : styles.valid;
  let failureText = !inputValid ? (
    <p className={styles["error-text"]}>{invalidMessage}</p>
  ) : (
    ""
  );

  return (
    <div className={styles["form-control"]}>
      <div>
        <label htmlFor="name" className={styles.label}>
          {label}
        </label>
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
    </div>
  );
}

export default useInput;
