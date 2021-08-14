import React from "react";
import Header from "./components/Header";
import MenuList from "./components/Menu/MenuList";
import Mission from "./components/Mission";
import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.container}>
      {/* <Header>Let's get started!</Header> */}
      <Mission></Mission>
      <MenuList></MenuList>
    </div>
  );
}

export default App;
