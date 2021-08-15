import React from 'react'
import styles from "./ModalListItem.module.scss";
import { useCustomHook } from "../../GlobalContext";

function ModalListItem({name, cost, qty}) {
  return (
    <div>
    <section className={styles.details}>
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.cost}>{cost}</p>
      <p className={styles.qty}>{qty}</p>
    </section>
    <div className={styles.masMenos}>
      <button>-</button>
      <button>+</button>
    </div>
    </div>
  )
}

export default ModalListItem
