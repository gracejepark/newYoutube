import React, { useState } from "react";
import { useEffect } from "react";
import styles from './css/DescriptionBox.module.css'

export default function DescriptionBox({viewCount, publishedAt, description}) {

  const [desOpen, setDes] = useState(false)

  useEffect(() => {
    setDes(false);
  },[])

  if(desOpen) {
    return (
      <div className={styles.openDesBox}>
        <div className={styles.desInfoBox}>
          <p>조회수 {viewCount}회</p>
          <p className={styles.pubText}>{publishedAt}</p>
        </div>
        <p>{description}</p>
        <button className={styles.closeBtn} onClick={() => setDes(false)}>간략히</button>
      </div>
    )
  } else {
    return (
      <div className={styles.desBox} onClick={() => setDes(true)}>
        <div className={styles.desInfoBox}>
          <p>조회수 {viewCount}회</p>
          <p className={styles.pubText}>{publishedAt}</p>
        </div>
        <p>{description}</p>
        <div className={styles.hideBox}>
          <p>더보기</p>
        </div>
      </div>
    )
  }
}