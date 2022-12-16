import React, { useContext, useEffect, useState } from "react"
import styles from './css/Header.module.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import { MenuContext } from "../context/MenuContext"

import {ReactComponent as Youtube} from '../svg/logo.svg'
import {ReactComponent as Menu} from '../svg/menu.svg'
import {ReactComponent as Search} from '../svg/search.svg'
import {ReactComponent as Mike} from '../svg/mike.svg'
import {ReactComponent as Make} from '../svg/make.svg'
import {ReactComponent as Alarm} from '../svg/alarm.svg'
import {ReactComponent as LeftTailArrow} from '../svg/leftTailArrow.svg'

import Button from "./ui/Button"
import { DetailMenuContext } from "../context/DetailMenuContext"
import { OpacityContext } from "../context/OpacityContext"
import { useMediaQuery } from "react-responsive"


export default function Header({detail}) {
  const navigate = useNavigate();
  const {keyword} = useParams();
  const [text, setText] = useState();

  const {toggleMenu} = useContext(MenuContext);
  const {toggleBlock} = useContext(DetailMenuContext);
  const {toggleActive} = useContext(OpacityContext);

  const [miniHeader, setMini] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/youtube/${text}`)
  }

  useEffect(() => setText(keyword || ''), [keyword]);


  const full = useMediaQuery({
    query: "(min-width: 1310px)"
  })

  const medium = useMediaQuery({
    query: "(min-width: 790px) and (max-width: 1309px)"
  })

  const minimum = useMediaQuery({
    query: "(min-width: 565px) and (max-width: 789px)"
  })

  const micro = useMediaQuery({
    query: "(max-width: 564px)"
  })
  

  if (full) {
    return (
      <header className={styles.header}>
        <div className={styles.box1}>
          {detail ? 
            <button className={styles.menu} onClick={() => {toggleBlock()}}><Menu/></button>
            : <button className={styles.menu} onClick={() => toggleMenu()}><Menu/></button>}
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
          <button className={styles.search}><div className={styles.searchInBox}><Search/></div></button>
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
  } else if (medium) {
    return (
      <header className={styles.header}>
        <div className={styles.box1}>
          {detail ? 
            <button className={styles.menu} onClick={() => {toggleBlock()}}><Menu/></button>
            : <button className={styles.menu} onClick={() => {toggleMenu(); toggleActive()}}><Menu/></button>}
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
          <button className={styles.search}><div className={styles.searchInBox}><Search/></div></button>
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
  } else if (minimum) {
    return (
      <header className={styles.header}>
        <div className={styles.box1}>
          {detail ? 
            <button className={styles.menu} onClick={() => {toggleBlock()}}><Menu/></button>
            : <button className={styles.menu} onClick={() => {toggleMenu(); toggleActive()}}><Menu/></button>}
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
          <button className={styles.search}><div className={styles.searchInBox}><Search/></div></button>
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

  } else if (micro) {
    return (
      <header className={styles.header}>
        <div className={styles.box1}>
          {detail ? 
            <button className={styles.menu} onClick={() => {toggleBlock()}}><Menu/></button>
            : <button className={styles.menu} onClick={() => {toggleMenu(); toggleActive()}}><Menu/></button>}
          <Link className={styles.youtube} to='/'>
            <Youtube/>
          </Link>
        </div>
        
        <div className={styles.box2}>
          <button className={styles.search}>
            <div className={styles.searchInBox} onClick={() => setMini(true)}>
              <Search/>
            </div>
            <div className={styles.underTextBox}>
              <p className={styles.underText}>검색</p>
            </div>
          </button>
          <div className={styles.mike}>
            <Button text={'음성으로 검색'} q={'mike'} icon={<Mike/>}/>
          </div>
        </div>

        {miniHeader &&
          <form onSubmit={handleSubmit} className={styles.subBox2}>
            <button onClick={() => setMini(false)}><LeftTailArrow /></button>
            <input
              type='text'
              placeholder="검색"
              value={text}
              className={styles.subInput}
              onChange={(e) => setText(e.target.value)}
            />
            <button className={styles.subSearch}><div className={styles.searchInBox}><Search /></div></button>
            <div className={styles.mike}>
              <Button text={'음성으로 검색'} q={'mike'} icon={<Mike />} />
            </div>
          </form>
        }

        <div className={styles.box3}>
          <Button text={'만들기'} icon={<Make/>}/>
          <Button text={'알림'} icon={<Alarm/>} />
          <div className={styles.alert}><p className={styles.alertText}>9+</p></div>
          <Button className={styles.profile}/>
        </div>
      </header>
  )
  }
}