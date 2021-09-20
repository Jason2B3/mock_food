import React, { useEffect } from "react";
import styles from "./ModalFace.module.scss";
import ModalListItem from "./ModalListItem";
import { useCustomHook } from "../../GlobalContext";
import { useSelector } from "react-redux";
import FinalSum from "./FinalSum";

const modalFace_helpers_2B3 = {
  // Rounds numbers to X digits (don't use on exponential values)
  round: function roundNumber(initNum, places) {
    Number.prototype.round = function (places) {
      return +(Math.round(this + "e+" + places) + "e-" + places);
    };
    return initNum.round(places); // 9.56
  },
};

function ModalFace() {
  // const dispatch = useDispatch();
  const orderStatus = useSelector((state) => state.order);
  const mealData = useSelector((state) => state.menu.data);
  console.log(orderStatus, mealData);

  //% Clone the orderState object and exclude all KVP's with value 0
  const currentOrder = {}; // {name:Sushi qty:2}
  for (let key in orderStatus) {
    if (orderStatus[key] !== 0) currentOrder[key] = orderStatus[key];
  }
  //% Prepare data for <ModalListItem>
  const containment = [];
  if (currentOrder.length !== 0) {
    for (let key in currentOrder) {
      // Calc name, cost, qty... then shove it into an object to be used as an entry in containment
      const name = key; // "sushi"
      const cost = mealData[key].price; // "string. Ex. $30.00"
      const qty = +currentOrder[key]; // number
      const aTotal = modalFace_helpers_2B3.round(
        currentOrder[key] * Number(mealData[key].price.slice(1)),
        2
      );
      containment.push({
        name: name,
        cost: cost,
        qty: qty,
        aTotal: aTotal,
      });
    }
  }
  //% Calculate the sum of all aTotal's inside the containment array
  const billTotal = containment.reduce((acc, currVal) => {
    return acc + currVal.aTotal;
  }, 0);

  return (
    <section className={styles.overlay}>
      <div className={styles.container}>
        {containment.map((i, ind) => {
          return (
            <ModalListItem
              name={i.name}
              cost={i.cost}
              qty={i.qty}
              aTotal={i.aTotal}
              key={ind}
            />
          );
        })}
        <FinalSum billTotal={billTotal}></FinalSum>
      </div>
    </section>
  );
}

export default ModalFace;
