import React, { useState, useCallback } from "react";
import useInput from "./useInput";

export default function PostalCode() {
  const [postalCodeValidity, setPostalCodeValidity] = useState("untouched");
  const invalidMessage = "The entered code is not valid";
  const label = "Postal Code:";
  const verifyName = useCallback(function (inputVal) {
    if (inputVal.trim() === "") {
      console.log("invalid");
      setPostalCodeValidity(false); // set to false if it's blank or whitespace
      return;
    }
    setPostalCodeValidity(true);
    console.log("valid");
    return;
  }, []);
  return useInput(postalCodeValidity, verifyName, label, invalidMessage);
}
