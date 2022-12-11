import React from "react"
import styles from './css/SidebarBlock.module.css'
import { useNavigate } from "react-router-dom"

export default function SidebarBlock ({children, sub}) {

  const navigate = useNavigate();
  const click = () => { navigate(`${children.nav}`) }


  if(sub) {
    return (
      <>
        {
          children.nav ?
            <div className={styles.subLiBox} onClick={click}>
              {children.icon}
              <li onClick={click} className={styles.subTitle}>{children.title}</li>
            </div>
            :
            <div className={styles.subLiBox}>
              {children.icon}
              <li className={styles.subTitle}>{children.title}</li>
            </div>
        }
      </>
    )
  } else {
    return (
      <>
        {
          children.nav ?
            <div className={styles.liBox} onClick={click}>
              {children.icon}
              <li onClick={click} className={styles.title}>{children.title}</li>
            </div>
            : 
            <div className={styles.liBox}>
              {children.icon}
              <li className={styles.title}>{children.title}</li>
            </div>
        }
      </>
    )
  }
}
