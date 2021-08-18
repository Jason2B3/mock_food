import React from "react";
import styles from "./ListItem.module.scss";
import FoodDetails from "./FoodDetails";
import Amount from "./Amount";
function ListItem({ name, descrip, price }) {
  
  return (
    <div className={styles.container}>
      <FoodDetails name={name} descrip={descrip} price={price} />
      <Amount  name={name} descrip={descrip} price={price} qty={0}/>
    </div>
  );
}

export default ListItem;
