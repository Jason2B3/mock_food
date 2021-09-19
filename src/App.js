import { hot } from "react-hot-loader/root";
import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
// Component imports
import AsyncController from "./components/AsyncController";
import Header from "./components/Header";
import MenuList from "./components/Menu/MenuList";
import Mission from "./components/Mission";
import ModalFace from "./components/Modal/ModalFace";
import LoadingSpinner from "./ui/LoadingSpinner";
// State Management imports
import { useCustomHook } from "./GlobalContext";
import { useSelector } from "react-redux";

function App() {
  //% Grab value from context API so we know when to render the modal
  const { isModalActivated } = useCustomHook();

  //% Grab info from Redux store's menu.js then use it to render conditional JSX
  const [menuSection, setMenuSection] = useState(undefined);
  const shouldRender = useSelector((state) => state.menu.shouldRender);
  const menuData = useSelector((state) => state.menu.data);
  const errorMessage = useSelector((state) => state.menu.errorMessage);
  const successMessage = useSelector((state) => state.menu.successMessage);
  const errorH2 = <h2 className={styles.msg}>{errorMessage}</h2>;
  const successH2 = <h2 className={styles.msg}>{successMessage}</h2>;
  //% useEffect runs when we update the Redux store by using 1 of 3 buttons
  useEffect(() => {
    switch (shouldRender) {
      //# ----------- GET related renders -----------
      case "initial":
        setMenuSection(successH2);
        break;
      case "GET_pending":
        setMenuSection(<LoadingSpinner />);
        break;
      case "GET_noResults":
        setMenuSection(errorH2);
        break;
      case "GET_failure":
        setMenuSection(errorH2);
        break;
      case "GET_success":
        setMenuSection(<MenuList />);
        break;
      //# ----------- PUT related renders -----------
      case "PUT_success":
        setMenuSection(successH2);
        break;
      case "PUT_failure":
        setMenuSection(errorH2);
        break;
      //# ----------- DELETE related renders -----------
      case "DELETE_success":
        setMenuSection(successH2);
        break;
      case "DELETE_failure":
        setMenuSection(errorH2);
        break;
    }
  }, [shouldRender, menuData, errorMessage]);
  return (
    <div className={styles.container}>
      <Header />
      <img
        className={styles.img}
        alt="no IMG found"
        src="https://i.postimg.cc/g0X9vXbN/food-image.jpg"
      />
      <Mission />
      {menuSection}
      <AsyncController />
      {isModalActivated ? <ModalFace /> : ""}
    </div>
  );
}

export default hot(App);
