import React from "react";
import Header from "./components/Header";
import MenuList from "./components/Menu/MenuList";
import Mission from "./components/Mission";
import ModalFace from "./components/Modal/ModalFace";
import styles from "./App.module.scss";
import { useCustomHook } from "./GlobalContext";

function App() {
  const { isModalActivated } = useCustomHook();
  return (
    <div className={styles.container}>
      <Header></Header>
      <img
        className={styles.img}
        alt="no IMG found"
        src="https://i.postimg.cc/g0X9vXbN/food-image.jpg"
      />
      <Mission />
      <MenuList />
      {isModalActivated ? <ModalFace /> : ""}
    </div>
  );
}

export default App;
