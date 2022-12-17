import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react"
import { getHistory, getLiked } from "../api/firebase";
import { MenuContext } from "../context/MenuContext";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import styles from './css/Feed.module.css'

import Sidebar from "../components/Sidebar"
import FeedVideoCard from "../components/FeedVideoCard";

import {ReactComponent as History} from '../svg/history.svg'
import {ReactComponent as Liekd} from '../svg/liked.svg'
import Header from "../components/Header";

export default function Feed() {
  const { data: histories } = useQuery(['histories'], () => getHistory());
  const { data: likes } = useQuery(['likes'], () => getLiked());
  const {isOpen} = useContext(MenuContext);

  const navigate = useNavigate();

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
        <Header />
        <Sidebar />
        <div className={styles.totalBox}>

          <div className={styles.sectionBox}>

            <div className={styles.section}>
              <div className={styles.titleBox}>
                <h2 className={styles.title} onClick={() => navigate('/youtube/feed/history')}><History /> 기록</h2>
                <button className={styles.viewMore} onClick={() => navigate('/youtube/feed/history')}>모두 보기</button>
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
                  likes && <h2 className={styles.title2} onClick={() => navigate('/youtube/feed/liked')}><Liekd /> 좋아요 표시한 동영상 <span className={styles.length}>{likes.length}</span></h2>
                }
                <button className={styles.viewMore} onClick={() => navigate('/youtube/feed/liked')}>모두 보기</button>
              </div>
              <div className={styles.cardBox}>
                {
                  likes && likes.map((a, i) => {
                    return <FeedVideoCard video={a} num={i} limit={4} />
                  })
                }
              </div>
            </div>

          </div> {/* section box */}

          <div className={styles.rightBox}>
            <div className={styles.upBox}>
              <div className={styles.profile}></div>
              <h2 className={styles.name}>주응</h2>
            </div>
            <div className={styles.textBox}>
              <p>구독</p>
              <p>0</p>
            </div>
            <div className={styles.textBox}>
              <p>업로드</p>
              <p>0</p>
            </div>
            <div className={styles.textBox}>
              <p>좋아요</p>
              {likes && <p>{likes.length}</p>}
            </div>
          </div>

        </div>  {/* total box */}
      </>
    )
  } else if((!isOpen && full) || (medium)) {
    return (
      <>
        <Header />
        <Sidebar />
        <div className={styles.totalBox2}>

          <div className={styles.sectionBox}>

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

          </div> {/* section box */}

          <div className={styles.rightBox}>
            <div className={styles.upBox}>
              <div className={styles.profile}></div>
              <h2 className={styles.name}>주응</h2>
            </div>
            <div className={styles.textBox}>
              <p>구독</p>
              <p>0</p>
            </div>
            <div className={styles.textBox}>
              <p>업로드</p>
              <p>0</p>
            </div>
            <div className={styles.textBox}>
              <p>좋아요</p>
              {likes && <p>{likes.length}</p>}
            </div>
          </div>

        </div> {/* total box */}


      </>

    )
  } else if(minimum) {
    return (
      <>
        <Header />
        <Sidebar />
        <div className={styles.totalBox3}>

          <div className={styles.sectionBox}>
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

          </div> {/* section box */}

        </div> {/* total box */}

      </>

    )
  }
}
