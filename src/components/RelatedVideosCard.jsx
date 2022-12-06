import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './css/RelatedVideosCard.module.css'

export default function RelatedVdeosCard({video}) {
  const navigate = useNavigate();
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet
  
  return (
    <div className={styles.totalBox} onClick={() => {navigate(`/youtube/watch/${video.id}`, {state: {video}})}}>
      <img className={styles.img} src={thumbnails.medium.url} alt={title} />
      <div className={styles.textBox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subText}>{channelTitle}</p>
        <p className={styles.subText}>{publishedAt}</p>
      </div>
    </div>
  )
}