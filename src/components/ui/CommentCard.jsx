import React from "react"

import styles from './css/CommentCard.module.css'

import { ReactComponent as ThumbsUp } from '../../svg/thumbsUp.svg'
import { ReactComponent as ThumbsDown } from '../../svg/thumbsDown.svg'

export default function CommentCard({ comment }) {

  // console.log(`${comment.snippet.topLevelComment.snippet.textDisplay.length}`)

  if (comment.replies) {
    const replies = comment.replies

    return (
      <div className={styles.topBox}>
        <img className={styles.profilePic} src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
        <div className={styles.comTextBox}>
          <div className={styles.nameBox}>
            <p className={styles.name}>{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
            <p className={styles.publish}>{comment.snippet.topLevelComment.snippet.publishedAt}</p>
          </div>
          <p className={styles.comment}>{comment.snippet.topLevelComment.snippet.textDisplay}</p>

          <div className={styles.btnBox}>
            <button className={styles.button}><ThumbsUp /></button>
            <p className={styles.likeCount}>{comment.snippet.topLevelComment.snippet.likeCount}</p>
            <button className={styles.button}><ThumbsDown /></button>
          </div>

          <div>
            <p>{replies.comments.map((a) => <p>{a.snippet.textDisplay}</p>)}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.topBox}>
        <img className={styles.profilePic} src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
        <div className={styles.comTextBox}>
          <div className={styles.nameBox}>
            <p className={styles.name}>{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
            <p className={styles.publish}>{comment.snippet.topLevelComment.snippet.publishedAt}</p>
          </div>
          <p className={styles.comment}>{comment.snippet.topLevelComment.snippet.textDisplay}</p>

          <div className={styles.btnBox}>
            <button className={styles.button}><ThumbsUp /></button>
            <p className={styles.likeCount}>{comment.snippet.topLevelComment.snippet.likeCount}</p>
            <button className={styles.button}><ThumbsDown /></button>
          </div>

          <div>
          </div>
        </div>
      </div>
    )
  }
}
