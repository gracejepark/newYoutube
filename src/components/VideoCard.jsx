import React from "react"
import { Navigate, useNavigate } from "react-router-dom";
import ChannelImg from "./ChannelImg";

import styles from './css/VideoCard.module.css'

export default function VideoCard({video}) {
  const {title, thumbnails, channelTitle, publishedAt, channelId} = video.snippet;
  const {id} = video

  const navigate = useNavigate();
  
  return (
    <li className={styles.totalBox} onClick={() => {return navigate(`/youtube/watch/${id}`, {state: {video}})}}>
      <div className={styles.imgBox}>
        <img className={styles.thumbnail} src={thumbnails.medium.url} alt={title} />
      </div>
      <div className={styles.underBox}>
        <ChannelImg id={channelId} />
        <div className={styles.textBox}>
          <p className={styles.text}>{title}</p>
          <p className={styles.text2}>{channelTitle}</p>
          <p className={styles.text2}>{publishedAt}</p>
        </div>
      </div>
    </li>
  )
}