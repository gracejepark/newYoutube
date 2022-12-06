import React from "react"
import styles from './css/SidebarBlock.module.css'
import { useNavigate } from "react-router-dom"

export default function SidebarBlock ({children}) {

  const navigate = useNavigate();
  const click = () => { navigate(`${children.nav}`) }

  return (
    <div className={styles.liBox}>
      {children.icon}
      {
        children.nav ? 
        <li onClick={click} className={styles.title}>{children.title}</li>
         : <li className={styles.title}>{children.title}</li>
      }
    </div>
    )
}