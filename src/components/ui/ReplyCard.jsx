import React from "react";
import styles from './css/ReplyCard.module.css'

import { ReactComponent as ThumbsUp } from '../../svg/thumbsUp.svg'
import { ReactComponent as ThumbsDown } from '../../svg/thumbsDown.svg'

export default function ReplyCard({reply, showReply}) {
  const { textDisplay, authorDisplayName, authorProfileImageUrl, likeCount, publishedAt } = reply.snippet

  if (showReply) {
    return (
      <div className={styles.topBox}>
        <img className={styles.profilePic} src={authorProfileImageUrl} />
        <div className={styles.comTextBox}>
          <div className={styles.nameBox}>
            <p className={styles.name}>{authorDisplayName}</p>
            <p className={styles.publish}>{publishedAt}</p>
          </div>
          <p className={styles.comment}>{textDisplay}</p>

          <div className={styles.btnBox}>
            <button className={styles.button}><ThumbsUp /></button>
            <p className={styles.likeCount}>{likeCount}</p>
            <button className={styles.button}><ThumbsDown /></button>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}