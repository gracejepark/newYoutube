import { useQuery } from "@tanstack/react-query"
import React, { useContext } from "react"
import { getHistory } from "../api/firebase"
import { MenuContext } from "../context/MenuContext";
import { useMediaQuery } from "react-responsive";
import styles from './css/History.module.css'

import HistoryVideoCard from "../components/HistoryVideoCard";
import Sidebar from "../components/Sidebar";
import HistoryBtnBar from "../components/ui/HistoryBtnBar";
import Header from "../components/Header";

export default function History() {
  const {data: histories} = useQuery(['histories'], () => getHistory());
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


  const Upside = useMediaQuery({
    query: "(max-width: 875px)"
  })

  if(isOpen && full) {
    return (
      <>
        <Header/>
        <Sidebar />
        <div className={styles.totalBox1}>
          <div className={styles.innerBox}>
            <div className={styles.videoBox}>
              <h2 className={styles.title}>시청 기록</h2>
              {histories && histories.map((a) => { return <HistoryVideoCard video={a} /> })}
            </div>
            <div className={styles.btnBox}>
              <HistoryBtnBar />
            </div>
          </div>
        </div>
      </>
    )
  } else if((!isOpen && full) || medium){
    return (
      <>
        <Header/>
        <Sidebar />
        <div className={styles.totalBox2}>
          <div className={styles.innerBox}>
            <div className={styles.videoBox}>
              <h2 className={styles.title}>시청 기록</h2>
              {histories && histories.map((a) => { return <HistoryVideoCard video={a} /> })}
            </div>
            <div className={styles.btnBox}>
              <HistoryBtnBar />
            </div>
          </div>
        </div>
      </>
    )
  } else if (minimum) {
    return (
      <>
        <Header/>
        <Sidebar />
        <div className={styles.totalBox3}>
          <div className={styles.innerBox}>
            <div className={styles.videoBox}>
              <h2 className={styles.title}>시청 기록</h2>
              {histories && histories.map((a) => { return <HistoryVideoCard video={a} /> })}
            </div>
            <div className={styles.btnBox}>
              <HistoryBtnBar />
            </div>
          </div>
        </div>
      </>
    )
  }
}