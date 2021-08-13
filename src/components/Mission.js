import React from "react";
import styles from "./Mission.module.scss";

function Mission() {
  return (
    <section className={styles.container}>
      <h2>
        <span id={styles.sh1}>Delicious Food, </span>
        <span id={styles.sh2}>Delivered to You</span>
      </h2>
      <p>
        <span id={styles.s1}>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a{" "}
        </span>
        <span id={styles.s2}>delicious lunch or dinner at home.</span>
      </p>
      <p>
        <span id={styles.s3}>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by{" "}
        </span>
        <span id={styles.s4}>experienced chefs!</span>
      </p>
    </section>
  );
}

export default Mission;
