import React from "react"
import styles from './css/DetailButton.module.css'

export default function DetailButton({text}) {
  return (
    <button className={styles.button}>
      {text}
    </button>
  )
}