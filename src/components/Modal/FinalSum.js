import React from "react";

function FinalSum({ billTotal }) {
  return (
    <div>
      <p>
        <span>Total Amount: </span>
        <span>{billTotal}</span>
      </p>
      <button>Close</button>
      <button>Order</button>
    </div>
  );
}

export default FinalSum;
// finalVerdict
