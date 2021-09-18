import React from "react";
import styles from "./MenuList.module.scss";
import ListItem from "./ListItem";
import { useCustomHook } from "../../GlobalContext";
import { useSelector } from "react-redux";

function MenuList() {
  //% Grab the data for the menu here from the Redux store
  const meals = useSelector((state) => state.menu.data);
  // Feed it to components further down the branch via props
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default MenuList;
