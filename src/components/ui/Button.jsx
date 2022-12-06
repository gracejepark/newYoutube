import React from "react"
import styles from './css/Button.module.css'

export default function Button({text, icon}) {
  return (
    <>
    { text ? <button className={styles.button}>
                {icon ? icon : text}
             </button> : <div className={styles.profile}></div>}
    </>
  )
}