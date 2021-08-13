import React from "react";
import styles from "./FoodDetails.module.scss";
function FoodDetails({ name, descrip, price }) {
  return (
    <div className={styles.details}>
      <h4>{name}</h4>
      <p>{descrip}</p>
      <p>{price}</p>
    </div>
  );
}

export default FoodDetails;
