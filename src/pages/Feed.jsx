import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react"
import { getHistory, getLiked } from "../api/firebase";
import { MenuContext } from "../context/MenuContext";
import styles from './css/Feed.module.css'

import Sidebar from "../components/Sidebar"
import FeedVideoCard from "../components/FeedVideoCard";

import {ReactComponent as History} from '../svg/history.svg'
import {ReactComponent as Liekd} from '../svg/liked.svg'

export default function Feed() {
  const { data: histories } = useQuery(['histories'], () => getHistory());
  const { data: likes } = useQuery(['likes'], () => getLiked());
  const {isOpen} = useContext(MenuContext);

  if (isOpen) {
    return (
      <div className={styles.totalBox}>

        <Sidebar />

        <div className={styles.section}>
          <div className={styles.titleBox}>
            <h2 className={styles.title}><History /> 기록</h2>
            <button className={styles.viewMore}>모두 보기</button>
          </div>
          <div className={styles.cardBox}>
            {
              histories && histories.map((a, i) => {
                return <FeedVideoCard video={a} num={i} limit={8} />
              })
            }
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.titleBox}>
            {
              likes && <h2 className={styles.title2}><Liekd /> 좋아요 표시한 동영상 <span className={styles.length}>{likes.length}</span></h2>
            }
            <button className={styles.viewMore}>모두 보기</button>
          </div>
          <div className={styles.cardBox}>
            {
              likes && likes.map((a, i) => {
                return <FeedVideoCard video={a} num={i} limit={4} />
              })
            }
          </div>
        </div>

      </div>
    )
  } else {
    return (
      <div className={styles.totalBox2}>

        <Sidebar />

        <div className={styles.section}>
          <div className={styles.titleBox}>
            <h2 className={styles.title}><History /> 기록</h2>
            <button className={styles.viewMore}>모두 보기</button>
          </div>
          <div className={styles.cardBox}>
            {
              histories && histories.map((a, i) => {
                return <FeedVideoCard video={a} num={i} limit={8} />
              })
            }
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.titleBox}>
            {
              likes && <h2 className={styles.title2}><Liekd /> 좋아요 표시한 동영상 <span className={styles.length}>{likes.length}</span></h2>
            }
            <button className={styles.viewMore}>모두 보기</button>
          </div>
          <div className={styles.cardBox}>
            {
              likes && likes.map((a, i) => {
                return <FeedVideoCard video={a} num={i} limit={4} />
              })
            }
          </div>
        </div>

      </div>
    )
  }
}


