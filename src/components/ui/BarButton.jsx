import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './css/BarButton.module.css'

export default function BarButton({title}) {
  const navigate = useNavigate();
  const click = () => { navigate(`/youtube/${title}`) }

    return (
      <button onClick={click} className={styles.button}>{title}</button>
    )
}