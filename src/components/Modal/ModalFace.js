import React, { useEffect } from "react";
import styles from "./ModalFace.module.scss";
import ModalListItem from "./ModalListItem";
import { useCustomHook } from "../../GlobalContext";
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
  const { orderState, meals } = useCustomHook();
  //% Clone the orderState object and exclude all KVP's with value 0
  const nameQtyObject = function () {
    const modalObj = {};
    for (let key in orderState) {
      if (orderState[key] !== 0) modalObj[key] = orderState[key];
    }
    return modalObj;
  };
  const currentOrder = nameQtyObject(); // {name:Sushi qty:2}

  //% Prepare/organize some existing values for the ModalListItem component
  //% WHEN: we add an entry to the containment field
  // {name, cost, qty, mealTotal} data on each food we have in-cart
  const containment = [];

  if (currentOrder.length !== 0) {
    for (let key in currentOrder) {
      // Calc name, cost, qty... then shove it into an object to be used as an entry in containment
      const name = key;
      const cost = meals[key].price;
      const qty = currentOrder[key];
      const aTotal = modalFace_helpers_2B3.round(
        currentOrder[key] * Number(meals[key].price.slice(1)),
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

  // Summate all meal costs here then place in the final li
  return (
    <ul className={styles.container}>
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
      <li>
        MAKE THIS CONTAIN THE SUMMATION OF ALL MEAL COSTS (but don't show if
        it's 0
      </li>
    </ul>
  );
}

export default ModalFace;
