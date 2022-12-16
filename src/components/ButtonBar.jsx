import React, { useContext, useState } from "react"
import { useMediaQuery } from "react-responsive"

import { MenuContext } from "../context/MenuContext"

import styles from './css/ButtonBar.module.css'
import BarButton from "./ui/BarButton"
import { ReactComponent as RightArrow } from '../svg/rightArrow.svg'
import { ReactComponent as LeftArrow } from '../svg/leftArrow.svg'

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

  const full = useMediaQuery({
    query: "(min-width: 1310px)"
  })

  const medium = useMediaQuery({
    query: "(min-width: 790px) and (max-width: 1309px)"
  })

  const minimum = useMediaQuery({
    query: "(max-width: 789px)"
  })

  const { isOpen } = useContext(MenuContext);


  if (isOpen && full) {
    return (
      <div className={styles.totalBoxFull}>
        <div className={styles.buttonBar}>
          <div className={styles.btnWrap}>
            {
              title.map((a, i) => { return <BarButton className={styles.barButton} title={a.title} num={i} /> })
            }
          </div>
          <div className={styles.colorBoxLeft}>
            <div className={styles.dummyBoxLeft}>
              <div className={styles.btnBoxLeft}>
                <button><LeftArrow /></button>
              </div>
              <div className={styles.textBox}>
                <p>이전</p>
              </div>
            </div>
          </div>
          <div className={styles.colorBoxRight}>
            <div className={styles.dummyBoxRight}>
              <div className={styles.btnBoxRight}>
                <button><RightArrow /></button>
              </div>
              <div className={styles.textBox}>
                <p>다음</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else if ((!isOpen && full) || (medium)) {
    return (
      <div className={styles.totalBoxMedium}>
        <div className={styles.buttonBar}>
          <div className={styles.btnWrap}>
            {
              title.map((a, i) => { return <BarButton className={styles.barButton} title={a.title} num={i} /> })
            }
          </div>
          <div className={styles.colorBoxLeft}>
            <div className={styles.dummyBoxLeft}>
              <div className={styles.btnBoxLeft}>
                <button><LeftArrow /></button>
              </div>
              <div className={styles.textBox}>
                <p>이전</p>
              </div>
            </div>
          </div>
          <div className={styles.colorBoxRight}>
            <div className={styles.dummyBoxRight}>
              <div className={styles.btnBoxRight}>
                <button><RightArrow /></button>
              </div>
              <div className={styles.textBox}>
                <p>다음</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else if (minimum) {
    return (
      <div className={styles.totalBoxMinimum}>
        <div className={styles.buttonBar}>
          <div className={styles.btnWrap}>
            {
              title.map((a, i) => { return <BarButton className={styles.barButton} title={a.title} num={i} /> })
            }
          </div>
          <div className={styles.colorBoxLeft}>
            <div className={styles.dummyBoxLeft}>
              <div className={styles.btnBoxLeft}>
                <button><LeftArrow /></button>
              </div>
              <div className={styles.textBox}>
                <p>이전</p>
              </div>
            </div>
          </div>
          <div className={styles.colorBoxRight}>
            <div className={styles.dummyBoxRight}>
              <div className={styles.btnBoxRight}>
                <button><RightArrow /></button>
              </div>
              <div className={styles.textBox}>
                <p>다음</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

