import React from "react";
import { useNavigate } from "react-router-dom";

import styles from './css/FeedVideoCard.module.css'

export default function FeedVideoCard({video, num, limit}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet
  const navigate = useNavigate();

  if (num < limit) {
    return (
      <div className={styles.totalBox} onClick={() => {navigate(`/youtube/watch/${video.id}`, {state: {video}})}}>
        <img className={styles.img} src={thumbnails.medium.url} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subText}>{channelTitle}</p>
        <p className={styles.subText}>{publishedAt}</p>
      </div>
    )
  } else {
    return null
  }

}