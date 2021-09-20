import React, { useState, useCallback } from "react";
import useInput from "./useInput";

export default function City() {
  const [cityValidity, setCityValidity] = useState("untouched");
  const invalidMessage = "This city is not valid";
  const label = "City:";
  const verifyName = useCallback(function (inputVal) {
    if (inputVal.trim() === "") {
      console.log("invalid");
      setCityValidity(false); // set to false if it's blank or whitespace
      return;
    }
    setCityValidity(true);
    console.log("valid");
    return;
  }, []);
  return useInput(cityValidity, verifyName, label, invalidMessage);
}
