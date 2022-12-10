import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './css/BarButton.module.css'

export default function BarButton({title, num}) {
  const navigate = useNavigate();
  const click = () => { navigate(`/youtube/${title}`) }

  if(num == 0) {
    return (
      <button onClick={click} className={styles.buttonFir}>{title}</button>
    )
  } else if (num < 14) {
    return (
      <button onClick={click} className={styles.button}>{title}</button>
    )
  } else {
    return (
      <button onClick={click} className={styles.buttonLas}>{title}</button>
    )
  }
}