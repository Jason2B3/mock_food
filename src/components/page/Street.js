import React, { useState, useCallback } from "react";
import useInput from "./useInput";


export default function Street() {
  const [streetValidity, setStreetValidity] = useState("untouched");
  const invalidMessage = "The street entered is not valid";
  const label = "Street:";
  const verifyStreet = useCallback(function (inputVal) {
    if (inputVal.trim() === "") {
      console.log("invalid");
      setStreetValidity(false); // set to false if it's blank or whitespace
      return;
    }
    setStreetValidity(true);
    console.log("valid");
    return;
  }, []);
  return useInput(streetValidity, verifyStreet, label, invalidMessage);
}
