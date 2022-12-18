import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react"
import { useMediaQuery } from "react-responsive";
import { getLiked } from "../api/firebase";
import { MenuContext } from "../context/MenuContext";

import LikedVideoCard from "../components/LikedVideoCard";
import Sidebar from "../components/Sidebar"
import styles from './css/Liked.module.css'

import {ReactComponent as Asf} from '../svg/asf.svg'
import {ReactComponent as Play} from '../svg/play.svg'
import {ReactComponent as Shuffle} from '../svg/shuffle.svg'
import Header from "../components/Header";

export default function Liked() {
  const {data: likes} = useQuery(['likes'], () => getLiked());
  const {isOpen} = useContext(MenuContext);

  //1310~: 기본 사이드 바 & 토글 시 서브 사이드 바
  //790~1310: 서브 사이드 바 & 토글 시 디테일 사이드 바
  //~789: null & 토글 시 디테일 사이드 바

  const full = useMediaQuery({
    query: "(min-width: 1310px)"
  })

  const medium = useMediaQuery({
    query: "(min-width: 790px) and (max-width: 1309px)"
  })

  const minimum = useMediaQuery({
    query: "(max-width: 789px)"
  })

  if (isOpen && full) {
    return (
      <>
        <Header/>
        <Sidebar/>
        <div className={styles.leftBox}>
          {
            likes && <img className={styles.backImg} src={likes[0].snippet.thumbnails.medium.url} />
          }
          <div className={styles.leftBoxCont}>

            <div className={styles.dummyBox}>
              {
                likes && <img className={styles.img} src={likes[0].snippet.thumbnails.medium.url} />
              }

              <div className={styles.textBox}>
                <h2 className={styles.title}>좋아요 표시한 동영상</h2>
                <div className={styles.underTitleBox}>
                  <div>
                    <p className={styles.name}>주응</p>
                    {
                      likes && <p className={styles.subText}>동영상 {likes.length}개</p>
                    }
                  </div>
                  <button className={styles.etcBtn}><Asf /></button>
                </div>
              </div>
            </div>

            <div className={styles.btnBox}>
              <button className={styles.btnLeft}><Play /><p className={styles.btnText}>모두 재생</p></button>
              <button className={styles.btnRight}><Shuffle /><p className={styles.btnText}>셔플</p></button>
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
  } else if ((!isOpen && full) || medium) {
    return (
      <>
        <Header/>
        <Sidebar/>
        <div className={styles.leftBox2}>
          {
            likes && <img className={styles.backImg} src={likes[0].snippet.thumbnails.medium.url} />
          }
          <div className={styles.leftBoxCont2}>

            <div className={styles.dummyBox}>
              {
                likes && <img className={styles.img} src={likes[0].snippet.thumbnails.medium.url} />
              }
              <div className={styles.textBox}>
                <h2 className={styles.title}>좋아요 표시한 동영상</h2>
                <div className={styles.underTitleBox}>
                  <div>
                    <p className={styles.name}>주응</p>
                    {
                      likes && <p className={styles.subText}>동영상 {likes.length}개</p>
                    }
                  </div>
                  <button className={styles.etcBtn}><Asf /></button>
                </div>
              </div>
            </div>

            <div className={styles.btnBox}>
              <button className={styles.btnLeft}><Play /><p className={styles.btnText}>모두 재생</p></button>
              <button className={styles.btnRight}><Shuffle /><p className={styles.btnText}>셔플</p></button>
            </div>

          </div>
        </div>
  
        <div className={styles.rightBox2}>
          {
            likes && likes.map((a,i) => {return <LikedVideoCard video={a} num={i}/>})
          }
        </div>
      </>
    )
  } else if (minimum) {
    return (
      <>
        <Header/>
        <Sidebar/>
        <div className={styles.leftBox3}>
          {
            likes && <img className={styles.backImg} src={likes[0].snippet.thumbnails.medium.url} />
          }
          <div className={styles.leftBoxCont3}>

            <div className={styles.dummyBox}>
              {
                likes && <img className={styles.img} src={likes[0].snippet.thumbnails.medium.url} />
              }

              <div className={styles.textBox}>
                <h2 className={styles.title}>좋아요 표시한 동영상</h2>
                <div className={styles.underTitleBox}>
                  <div>
                    <p className={styles.name}>주응</p>
                    {
                      likes && <p className={styles.subText}>동영상 {likes.length}개</p>
                    }
                  </div>
                  <button className={styles.etcBtn}><Asf /></button>
                </div>
              </div>
            </div>

            <div className={styles.btnBox}>
              <button className={styles.btnLeft}><Play /><p className={styles.btnText}>모두 재생</p></button>
              <button className={styles.btnRight}><Shuffle /><p className={styles.btnText}>셔플</p></button>
            </div>

          </div>
        </div>
  
        <div className={styles.rightBox3}>
          {
            likes && likes.map((a,i) => {return <LikedVideoCard video={a} num={i}/>})
          }
        </div>
      </>
    )
  }
}