import { hot } from "react-hot-loader/root";
import React from "react";
import styles from "./App.module.scss";
// Component imports
import AsyncController from "./components/AsyncController";
import Header from "./components/Header";
import MenuList from "./components/Menu/MenuList";
import Mission from "./components/Mission";
import ModalFace from "./components/Modal/ModalFace";
// State Management imports
import { useCustomHook } from "./GlobalContext";

function App() {
  const { isModalActivated } = useCustomHook();

  return (
    <div className={styles.container}>
      <Header />
      <img
        className={styles.img}
        alt="no IMG found"
        src="https://i.postimg.cc/g0X9vXbN/food-image.jpg"
      />
      <Mission />
      <MenuList />
      <AsyncController/>
      {isModalActivated ? <ModalFace /> : ""}
    </div>
  );
}

export default hot(App);
