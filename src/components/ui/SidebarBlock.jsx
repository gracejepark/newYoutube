import React, { useContext } from "react"
import styles from './css/SidebarBlock.module.css'
import { useNavigate } from "react-router-dom"
import { DetailMenuContext } from "../../context/DetailMenuContext";
import { OpacityContext } from "../../context/OpacityContext";

export default function SidebarBlock ({children, sub, detail}) {

  const navigate = useNavigate();
  const click = () => { navigate(`${children.nav}`) }

  const {toggleBlock} = useContext(DetailMenuContext);

  const {toggleActive} = useContext(OpacityContext);


  if(sub) {
    return (
      <>
        {
          children.nav ?
            <div className={styles.subLiBox} onClick={click}>
              {children.icon}
              <li className={styles.subTitle}>{children.title}</li>
            </div>
            :
            <div className={styles.subLiBox}>
              {children.icon}
              <li className={styles.subTitle}>{children.title}</li>
            </div>
        }
      </>
    )
  } else if (detail){
    return (
      <>
        {
          children.nav ?
            <div className={styles.liBox} onClick={() => {navigate(`${children.nav}`); toggleBlock(); toggleActive()}}>
              {children.icon}
              <li className={styles.title}>{children.title}</li>
            </div>
            : 
            <div className={styles.liBox}>
              {children.icon}
              <li className={styles.title}>{children.title}</li>
            </div>
        }
      </>
    )
  } else {
    return (
      <>
        {
          children.nav ?
            <div className={styles.liBox}  onClick={click}>
              {children.icon}
              <li className={styles.title}>{children.title}</li>
            </div>
            : 
            <div className={styles.liBox}>
              {children.icon}
              <li className={styles.title}>{children.title}</li>
            </div>
        }
      </>)
  }
}

// toggleBlock()