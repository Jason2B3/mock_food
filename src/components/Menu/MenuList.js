import React from "react";
import styles from "./MenuList.module.scss";
import ListItem from "./ListItem";
import { useCustomHook } from "../../GlobalContext";

function MenuList() {
  const { meals } = useCustomHook();
  return (
    <ul className={styles.container}>
      {meals.map((i, ind) => (
        <ListItem name={i.name} descrip={i.descrip} price={i.price} key={ind} />
      ))}
    </ul>
  );
}

export default MenuList;
