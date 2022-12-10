import React, { useState } from "react"
import BarButton from "./ui/BarButton"
import styles from './css/ButtonBar.module.css'

export default function ButtonBar() {
  const [title] = useState([
    {title: '전체'},
    {title: '음악'},
    {title: '뉴스'},
    {title: '실시간'},
    {title: '애니메이션'},
    {title: '게임'},
    {title: '믹스'},
    {title: '만화 영화'},
    {title: '랩'},
    {title: '요리'},
    {title: '시각 예술'},
    {title: '축구'},
    {title: '최근에 업로드된 동영상'},
    {title: '감상한 동영상'},
    {title: '새로운 맞춤 동영상'}
  ])
  return (
    <div className={styles.buttonBar}>
      {
        title.map((a, i) => {return <BarButton title={a.title} num={i}/>})
      }
    </div>
  )
}