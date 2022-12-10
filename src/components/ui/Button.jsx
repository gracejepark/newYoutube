import React from "react"
import styles from './css/Button.module.css'

export default function Button({text, icon, q}) {

  if(q) {
    return (
      <div className={styles.relBoxMike}>
      <button className={styles.mike}>{icon ? icon : text}</button>
      <div className={styles.mikeTextBox}>{text}</div>
      </div>
    )
  } else if(text == '만들기') {
    return (
      <div className={styles.relBoxMake}>
      <button className={styles.button}>{icon ? icon : text}</button>
      <div className={styles.makeTextBox}>{text}</div>
      </div>
    )
  } else if(text == '알림') {
    return (
      <div className={styles.relBoxAlert}>
      <button className={styles.button}>{icon ? icon : text}</button>
      <div className={styles.alertTextBox}>{text}</div>
      </div>
    )
  } else {
    return (
      <div className={styles.profile}></div>
    )
  }
}