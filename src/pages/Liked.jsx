import { useQuery } from "@tanstack/react-query";
import React from "react"
import { getLiked } from "../api/firebase";
import LikedVideoCard from "../components/LikedVideoCard";
import Sidebar from "../components/Sidebar"
import styles from './css/Liked.module.css'

import {ReactComponent as Asf} from '../svg/asf.svg'
import {ReactComponent as Play} from '../svg/play.svg'
import {ReactComponent as Shuffle} from '../svg/shuffle.svg'

export default function Liked() {
  const {data: likes} = useQuery(['likes'], () => getLiked());

  return (
    <>
      <Sidebar/>
      <div className={styles.leftBox}>
        {
          likes && <img className={styles.backImg} src={likes[0].snippet.thumbnails.medium.url} />
        }
        <div className={styles.leftBoxCont}>
          {
            likes && <img className={styles.img} src={likes[0].snippet.thumbnails.medium.url} />
          }
          <h2 className={styles.title}>좋아요 표시한 동영상</h2>
          <p className={styles.name}>주응</p>
          {
            likes && <p className={styles.subText}>동영상 {likes.length}개</p>
          }
          <button className={styles.etcBtn}><Asf /></button>
          <div className={styles.btnBox}>
            <button className={styles.btnLeft}><Play />모두 재생</button>
            <button className={styles.btnRight}><Shuffle />셔플</button>
          </div>
        </div>
      </div>

      <div className={styles.rightBox}>
        {
          likes && likes.map((a,i) => {return <LikedVideoCard video={a} num={i}/>})
        }
      </div>
    </>
  )
}