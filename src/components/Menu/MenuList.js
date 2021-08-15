import React from "react";
import styles from "./MenuList.module.scss";
import ListItem from "./ListItem";
import { useCustomHook } from "../../GlobalContext";

function MenuList() {
  const { meals, orderState } = useCustomHook();
  
  return (
    <ul className={styles.container}>
      {meals.map((i, index) => {
        return <ListItem name={i.name} descrip={i.descrip} price={i.price} key={index} />
      })}
    </ul>
  );
}

export default MenuList;
