import { useQuery } from "@tanstack/react-query"
import React, { useContext, useEffect } from "react"
import { getHistory } from "../api/firebase"
import { MenuContext } from "../context/MenuContext";
import styles from './css/History.module.css'

import HistoryVideoCard from "../components/HistoryVideoCard";
import Sidebar from "../components/Sidebar";
import HistoryBtnBar from "../components/ui/HistoryBtnBar";

export default function History() {
  const {data: histories} = useQuery(['histories'], () => getHistory());
  const {isOpen} = useContext(MenuContext);

  if(isOpen) {
    return (
      <>
        <Sidebar />
        <div className={styles.totalBox}>
          <h2 className={styles.title}>시청 기록</h2>
          {histories && histories.map((a) => { return <HistoryVideoCard video={a} /> })}
        </div>
        <HistoryBtnBar/>
      </>
    )
  } else {
    return (
      <>
        <Sidebar />
        <div className={styles.totalBox2}>
          <h2 className={styles.title}>시청 기록</h2>
          {histories && histories.map((a) => { return <HistoryVideoCard video={a} /> })}
        </div>
        <HistoryBtnBar/>
      </>
    )
  }
}