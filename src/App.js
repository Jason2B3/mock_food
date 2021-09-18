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
  // Grab value from context API so we know when to render the modal
  const { isModalActivated } = useCustomHook();
  // The Menu section renders diff content depending on these Redux state valurs in menu.js
  const [menuSection, setMenuSection] = useState(undefined);
  useEffect(() => {
    if (shouldRender === "greeting") {
      setMenuSection(
        <h2>Send data to Firebase! Then you can display a Menu</h2>
      );
    }
    if (shouldRender === "spinner") {
      setMenuSection(<LoadingSpinner />);
    }
    if (shouldRender === "GET_noResults") {
      setMenuSection(
        <h2>No results found in our servers. Send some up first!</h2>
      );
    }
    if (shouldRender === "GET_errorMessage") {
      setMenuSection(
        <h2>Could not retrieve data. Check internet connection</h2>
      );
    }
    if (shouldRender === "menu") {
      setMenuSection(<MenuList />);
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
