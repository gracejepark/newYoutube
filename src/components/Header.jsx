import React, { useEffect, useState } from "react"
import styles from './css/Header.module.css'
import { Link, useNavigate, useParams } from "react-router-dom"

import {ReactComponent as Youtube} from '../svg/logo.svg'
import {ReactComponent as Menu} from '../svg/menu.svg'
import {ReactComponent as Search} from '../svg/search.svg'
import {ReactComponent as Mike} from '../svg/mike.svg'
import {ReactComponent as Make} from '../svg/make.svg'
import {ReactComponent as Alarm} from '../svg/alarm.svg'

import Button from "./ui/Button"


export default function Header() {
  const navigate = useNavigate();
  const {keyword} = useParams();
  const [text, setText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/youtube/${text}`)
  }

  useEffect(() => setText(keyword || ''), [keyword])

  return (
      <header className={styles.header}>
        <div className={styles.box1}>
          <button className={styles.menu}><Menu/></button>
          <Link className={styles.youtube} to='/'>
            <Youtube/>
          </Link>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.box2}>
          <input 
            type='text' 
            placeholder="검색" 
            value={text} 
            className={styles.input}
            onChange={(e) => setText(e.target.value)}
          />
          <button className={styles.search}><Search/></button>
          <div className={styles.mike}>
            <Button text={'음성으로 검색'} q={'mike'} icon={<Mike/>}/>
          </div>
        </form>

        <div className={styles.box3}>
          <Button text={'만들기'} icon={<Make/>}/>
          <Button text={'알림'} icon={<Alarm/>} />
          <div className={styles.alert}><p className={styles.alertText}>9+</p></div>
          <Button className={styles.profile}/>
        </div>
      </header>
  )
}

