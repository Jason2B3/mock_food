import React from "react";
import styles from "./ModalFace.module.scss";
import ModalListItem from "./ModalListItem";
import { useCustomHook } from "../../GlobalContext";

function ModalFace() {
  const { orderState, meals } = useCustomHook();
  //% Clone the orderState object and exclude all KVP's with value 0
  const generateModalObject = function () {
    const modalObj = {};
    for (let key in orderState) {
      if (orderState[key] !== 0) modalObj[key] = orderState[key];
    }
    return modalObj;
  };
  const currentOrder = generateModalObject(); // {name: qty}

  // Helper: Takes a food name and searches the meals array for its price
  function priceLocator(foodname) {
    let dolans;
    meals.forEach((entry, ind) => {
      if (entry.name === foodname) dolans = entry.price;
    });
    return dolans;
  }
  //% Prepare some values for the ModalListItem component
  let containment = []; // {name, cost, qty} data on each food we have in-cart
  let foodName, foodCost, foodQty;
  for (let key in currentOrder) {
    containment.push({
      name: key,
      cost: priceLocator(key),
      qty: currentOrder[key],
    });
  }
  // console.log(containment);

  return (
    <ul className={styles.container}>
      {containment.map((i) => {
        return <ModalListItem name={i.name} cost={i.cost} qty={i.qty} />;
      })}
    </ul>
  );
}

export default ModalFace;
/*
foodName={foodName}
foodCost={foodCost}
foodQty={foodQty}
key={ind}
*/
