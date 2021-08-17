import React from "react";
import styles from "./MenuList.module.scss";
import ListItem from "./ListItem";
import { useCustomHook } from "../../GlobalContext";

function MenuList() {
  const { meals, orderState } = useCustomHook();

  return (
    <ul className={styles.container}>
      {Object.keys(meals).map((key) => {
        return (
          <ListItem
            name={key}
            descrip={meals[key].descrip}
            price={meals[key].price}
            key={key + Math.random()} // being lazy AF here
          />
        );
      })}
    </ul>
  );
}

export default MenuList;
