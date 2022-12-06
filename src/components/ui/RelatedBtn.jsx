import React from "react";
import styles from './css/RelatedBtn.module.css'

export default function RelatedBtn({text}) {
  return (
    <button className={styles.button}>{text}</button>
  )
}