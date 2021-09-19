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
  // Grab info from Redux store's menu.js (will be used for conditional JSX)
  const shouldRender = useSelector((state) => state.menu.shouldRender);
  const menuData = useSelector((state) => state.menu.data);
  const errorMessage = useSelector((state) => state.menu.errorMessage);
  const successMessage = useSelector((state) => state.menu.successMessage);
  // Grab value from context API so we know when to render the modal
  const { isModalActivated } = useCustomHook();
  // The Menu section renders diff content depending on these Redux state valurs in menu.js
  const [menuSection, setMenuSection] = useState(4);
  useEffect(() => {
    switch (shouldRender) {
      //# ----------- GET related renders -----------
      case "initial": 
        setMenuSection(<h2>{successMessage}</h2>);
        break;
      case "GET_pending": 
        setMenuSection(<LoadingSpinner />);
        break;
      case "GET_noResults":
        setMenuSection(<h2>{errorMessage}</h2>);
        break;
      case "GET_failure": 
        setMenuSection(<h2>{errorMessage}</h2>);
        break;
      case "GET_success": 
        setMenuSection(<MenuList />);
        break;
      //# ----------- PUT related renders -----------
      case "PUT_success": 
        setMenuSection(<h2>{successMessage}</h2>);
        break;
      case "PUT_failure": 
        setMenuSection(<h2>{errorMessage}</h2>);
        break;
      //# ----------- DELETE related renders -----------
      case "DELETE_success":
        setMenuSection(<h2>{successMessage}</h2>);
        break;
      case "DELETE_failure":
        setMenuSection(<h2>{errorMessage}</h2>);
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
