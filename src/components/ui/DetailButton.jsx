import React from "react"
import { addLiked } from "../../api/firebase"
import styles from './css/DetailButton.module.css'

export default function DetailButton({videoId, video, text, key}) {
  
  if (key=1) {
    return (
      <button className={styles.button} onClick={() => addLiked(videoId, video)}>
        {text}
      </button>
    )
  } else {
    return (
      <button className={styles.button}>
        {text}
      </button>
    )
  }
}