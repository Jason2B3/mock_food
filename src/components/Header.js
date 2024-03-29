import React from "react";
import styles from "./Header.module.scss";
import { useCustomHook } from "../GlobalContext";
import { useSelector } from "react-redux";

function Header() {
  //% Track order quantity using Redux store's manageOrder.js state object
  const orderStateObject = useSelector((state) => state.order);
  const precartMealSum = function () {
    let mealsBeforeCart = 0;
    for (let key in orderStateObject) {
      mealsBeforeCart = mealsBeforeCart + Number(orderStateObject[key]);
    }
    return mealsBeforeCart;
  };
  //% Activate Modal by pressing the Cart button
  const { activateModal } = useCustomHook();

  return (
    <section className={styles.navbar}>
      <h1>React Meals</h1>
      <div className={styles.button} onClick={activateModal}>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkuMDI5IDEzaDIuOTcxbC0uMjY2IDFoLTIuOTkybC4yODctMXptLjg2My0zaDIuODEybC4yOTYtMWgtMi44MjFsLS4yODcgMXptLS41NzYgMmg0LjM4N2wuMjk3LTFoLTQuMzk2bC0uMjg4IDF6bTIuNjg0LTlsLS43NDMgMmgtMS45MjlsLTMuNDc0IDEyaC0xMS4yMzlsLTQuNjE1LTExaDE0LjgxMmwtLjU2NCAyaC0xMS4yNGwyLjkzOCA3aDguNDI4bDMuNDMyLTEyaDQuMTk0em0tMTQuNSAxNWMtLjgyOCAwLTEuNS42NzItMS41IDEuNSAwIC44MjkuNjcyIDEuNSAxLjUgMS41czEuNS0uNjcxIDEuNS0xLjVjMC0uODI4LS42NzItMS41LTEuNS0xLjV6bTUuOS03LS45IDdjLS44MjggMC0xLjUuNjcxLTEuNSAxLjVzLjY3MiAxLjUgMS41IDEuNSAxLjUtLjY3MSAxLjUtMS41YzAtLjgyOC0uNjcyLTEuNS0xLjUtMS41eiIvPjwvc3ZnPg==" />
        <span className={styles.yourCart}>Items in Cart:</span>
        <span className={styles.qty}>{precartMealSum()}</span>
      </div>
    </section>
  );
}

export default Header;
