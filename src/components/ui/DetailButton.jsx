import React, { useEffect, useState } from "react"
import { addLiked } from "../../api/firebase"
import styles from './css/DetailButton.module.css'

export default function DetailButton({videoId, video, text, icon, likeCount, margin, subIcon1, subIcon2}) {

  const [isOpen, setOpen] = useState('false')

  useEffect(() => {
    setOpen(false)
  }, [])
  
  if (text == '좋아요') {
    return (
    <div className={styles.totalBtnBox}>
      <button className={styles.likeButton} onClick={() => addLiked(videoId, video)}>
        <div className={styles.likeIconBox}>
          {icon}
          <p className={styles.likeCount}>{likeCount}</p>
        </div>
      </button>
      <div className={styles.underTextBox}>
        <p className={styles.underText}>이 동영상이 마음에 듭니다.</p>
      </div>
    </div>
    )
  } else if (text == '싫어요') {
    return (
    <div className={styles.totalBtnBox}>
      <button className={styles.disLikeButton}>
        <div className={styles.iconBox}>
          {icon}
        </div>
      </button>
      <div className={styles.underTextBox}>
        <p className={styles.underText}>이 동영상이 마음에 들지 않습니다.</p>
      </div>
    </div>
    )
  } else if (margin) {
    return (
    <div className={styles.totalBtnBox}>
      <button className={styles.button}>
        {icon}
        <p className={styles.marginText}>{text}</p>
      </button>
      <div className={styles.underTextBox}>
        <p className={styles.underText}>{text}</p>
      </div>
    </div>
    )
  } else if (text == '기타') {
    return (
      <div className={styles.asfBtnBox}>
        <button className={styles.asfButton} onClick={() => setOpen(!isOpen)}>
          {icon}
        </button>

        {isOpen &&  <div className={styles.underBtnBox}>
                      <button className={styles.underBtn1}>
                        {subIcon1}
                        <p className={styles.underBtnText}>신고</p>
                      </button>
                      <button className={styles.underBtn2}>
                        {subIcon2}
                        <p className={styles.underBtnText}>스크립트 표시</p>
                      </button>
                    </div>
        }
      </div>
    )
  } else {
    return (
      <button className={styles.button}>
        {icon}
        <p className={styles.text}>{text}</p>
      </button>
    )
  }
}