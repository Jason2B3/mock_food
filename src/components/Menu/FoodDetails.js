import React from "react";
import styles from "./FoodDetails.module.scss";
function FoodDetails({ name, descrip, price }) {
  return (
    <div className={styles.details}>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.descrip}>{descrip}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}

export default FoodDetails;
