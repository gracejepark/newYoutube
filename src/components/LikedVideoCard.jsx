import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './css/LikedVideoCard.module.css'

export default function LikedVideoCard({video, num}) {
  const navigate = useNavigate();

  const {thumbnails, title, channelTitle} = video.snippet
  return (
    <div className={styles.totalBox} onClick={() => { navigate(`/youtube/watch/${video.id}`, { state: { video } }) }}>
      <p className={styles.number}>{num + 1}</p>
      <img className={styles.img} src={thumbnails.medium.url} alt={title} />
      <div className={styles.textBox}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.channel}>{channelTitle}</p>
      </div>
    </div >
  )
}