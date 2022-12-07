import React from "react";
import styles from './css/HistoryBtnBar.module.css'

import {ReactComponent as Setting} from '../../svg/setting.svg'
import {ReactComponent as Stop} from '../../svg/stop.svg'
import {ReactComponent as Trash} from '../../svg/trash.svg'
import {ReactComponent as Search} from '../../svg/search.svg'

export default function HistoryBtnBar() {
  return (
    <div className={styles.totalBox}>
      <input type="text" className={styles.input} placeholder="시청 기록 검색" ></input>
      <h2 className={styles.title}>기록 유형</h2>
      <div className={styles.flex}>
        <label className={styles.label}><p>시청기록</p><input type="radio" /></label>
        <label className={styles.label}><p>커뮤니티</p><input type="radio" /></label>
        <div className={styles.BigBtnBox}>
          <button className={styles.buttonBig}><Trash className={styles.btnIcon}/>시청 기록 지우기</button>
          <button className={styles.buttonBig}><Stop className={styles.btnIcon}/>시청 기록 일시중지</button>
          <button className={styles.buttonBig}><Setting className={styles.btnIcon}/>전체 기록 관리</button>
        </div>
        <div className={styles.SmallBtnBox}>
          <button className={styles.buttonSmall}>시청 기록 및 검색 기록</button>
          <button className={styles.buttonSmall}>댓글</button>
          <button className={styles.buttonSmall}>실시간 채팅</button>
        </div>
      </div>
    </div>
  )
}