import { useQuery } from "@tanstack/react-query"
import React, { useEffect } from "react"
import { getHistory } from "../api/firebase"
import styles from './css/History.module.css'

import HistoryVideoCard from "../components/HistoryVideoCard";
import Sidebar from "../components/Sidebar";
import HistoryBtnBar from "../components/ui/HistoryBtnBar";

export default function History() {
  const {data: histories} = useQuery(['histories'], () => getHistory());

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
}