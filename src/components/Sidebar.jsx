import React, { useContext, useState } from "react"
import { useMediaQuery } from "react-responsive"
import styles from './css/Sidebar.module.css'

import {ReactComponent as Home} from '../svg/home.svg'
import {ReactComponent as Shorts} from '../svg/shorts.svg'
import {ReactComponent as Subscribe} from '../svg/subscribe.svg'
import {ReactComponent as Originals} from '../svg/originals.svg'
import {ReactComponent as YoutubeMusic} from '../svg/youtubeMusic.svg'

import {ReactComponent as Feed} from '../svg/feed.svg'
import {ReactComponent as History} from '../svg/history.svg'
import {ReactComponent as MyVideo} from '../svg/myVideo.svg'
import {ReactComponent as MyMovie} from '../svg/myMovie.svg'
import {ReactComponent as Later} from '../svg/later.svg'
import {ReactComponent as Saved} from '../svg/saved.svg'
import {ReactComponent as Liked} from '../svg/liked.svg'

import {ReactComponent as Hot} from '../svg/hot.svg'
import {ReactComponent as Music} from '../svg/music.svg'
import {ReactComponent as Game} from '../svg/game.svg'
import {ReactComponent as Sports} from '../svg/sports.svg'
import {ReactComponent as Education} from '../svg/education.svg'

import {ReactComponent as Studio} from '../svg/studio.svg'
import {ReactComponent as YoutubeMusicRed} from '../svg/youtubeMusicRed.svg'
import {ReactComponent as YoutubeKids} from '../svg/youtubeKids.svg'
import {ReactComponent as YoutubeTV} from '../svg/youtubeTV.svg'

import {ReactComponent as Setting} from '../svg/setting.svg'
import {ReactComponent as Notify} from '../svg/notify.svg'
import {ReactComponent as Center} from '../svg/center.svg'
import {ReactComponent as Send} from '../svg/send.svg'


import {ReactComponent as Menu} from '../svg/menu.svg'
import {ReactComponent as Youtube} from '../svg/logo.svg'

import SidebarBlock from './ui/SidebarBlock'
import DetailSidebar from './DetailSidebar'

import { MenuContext } from "../context/MenuContext"
import { OpacityContext } from "../context/OpacityContext"
import { Link } from "react-router-dom"



export default function Sidebar() {

  const [block1] = useState([
    {title: '???', icon: <Home/>, nav: '/'},
    {title: 'Shorts', icon: <Shorts/>},
    {title: '??????', icon: <Subscribe/>},
    {title: 'Originals', icon: <Originals/>},
    {title: 'YouTube Music', icon: <YoutubeMusic/>},
  ])

  const [block2] = useState([
    {title: '?????????', icon: <Feed/>, nav: '/youtube/feed'},
    {title: '?????? ??????', icon: <History/>, nav: '/youtube/feed/history'},
    {title: '??? ?????????', icon: <MyVideo/>},
    {title: '??? ??????', icon: <MyMovie/>},
    {title: '????????? ??? ?????????', icon: <Later/>},
    {title: '???????????? ?????? ?????????', icon: <Saved/>},
    {title: '????????? ????????? ?????????', icon: <Liked/>, nav: '/youtube/feed/liked'},
  ])

  const [block3] = useState([
    {title: '?????? ?????????', icon: <Hot/>},
    {title: '??????', icon: <Music/>},
    {title: '??????', icon: <MyMovie/>},
    {title: '??????', icon: <Game/>},
    {title: '?????????', icon: <Sports/>},
    {title: '??????', icon: <Education/>},
  ])

  const [block4] = useState([
    {title: '??????????????? ????????????', icon: <Studio/>},
    {title: 'YouTube Music', icon: <YoutubeMusicRed/>},
    {title: 'YouTube Kids', icon: <YoutubeKids/>},
    {title: 'YouTube TV', icon: <YoutubeTV/>},
  ])

  const [block5] = useState([
    {title: '??????', icon: <Setting/>},
    {title: '?????? ??????', icon: <Notify/>},
    {title: '????????????', icon: <Center/>},
    {title: '?????? ?????????', icon: <Send/>},
  ])

  const [miniBlock] = useState([
    {title: '???', icon: <Home/>, nav: '/'},
    {title: 'Shorts', icon: <Shorts/>},
    {title: '??????', icon: <Subscribe/>},
    {title: 'Originals', icon: <Originals/>},
    {title: 'YouTube Music', icon: <YoutubeMusic/>},
    {title: '?????????', icon: <Feed/>, nav: '/youtube/feed'},
    {title: '???????????? ?????? ?????????', icon: <Saved/>}
  ])

  //1310~: ?????? ????????? ??? & ?????? ??? ?????? ????????? ???
  //790~1310: ?????? ????????? ??? & ?????? ??? ????????? ????????? ???
  //~789: null & ?????? ??? ????????? ????????? ???

  const full = useMediaQuery({
    query: "(min-width: 1310px)"
  })

  const medium = useMediaQuery({
    query: "(min-width: 790px) and (max-width: 1309px)"
  })

  const minimum = useMediaQuery({
    query: "(max-width: 789px)"
  })

  const {isOpen, toggleMenu} = useContext(MenuContext);
  //isOpen??? ?????? ????????? ?????? ??? ???????????? ?????? ??????????????? ????????????.

  const {isActive, toggleActive} = useContext(OpacityContext);

  if(isOpen && full) {
    return (
      <div className={styles.sidebar}>
        <ul className={styles.sidebarUl}>
          {
            block1.map((a, i) => { return <SidebarBlock children={a} key={i} /> })
          }
        </ul>
        <ul className={styles.sidebarUl}>
          {
            block2.map((a, i) => { return <SidebarBlock children={a} key={i} /> })
          }
        </ul>
        <ul className={styles.sidebarUl}>
          <h3 className={styles.sidebarH3}>??????</h3>
          {
            block3.map((a, i) => { return <SidebarBlock children={a} key={i} /> })
          }
        </ul>
        <ul className={styles.sidebarUl}>
          <h3 className={styles.sidebarH3}>YouTube ?????????</h3>
          {
            block4.map((a, i) => { return <SidebarBlock children={a} key={i} /> })
          }
        </ul>
        <ul className={styles.sidebarUl}>
          {
            block5.map((a, i) => { return <SidebarBlock children={a} key={i} /> })
          }
        </ul>
        <div className={styles.hideBox}></div>
      </div>
    )
  } else if (!isOpen && full) {
    return (
      <div className={styles.subSidebar}>
        <ul className={styles.subSidebarUl}>
          {
            miniBlock.map((a, i) => { return <SidebarBlock children={a} key={i} sub={'sub'} /> })
          }
        </ul>
      </div>
    )
  } else if (isOpen && medium) {
    return (
      <>
        <div className={isActive ? styles.backgroundActive : styles.backgroundHidden}></div>
        <div className={isActive ? styles.totalBoxActive : styles.totalBoxHidden}>
          <div className={styles.box1}>
            <button className={styles.menu} onClick={() => { toggleMenu(); toggleActive() }}><Menu /></button>
            <Link className={styles.youtube} to='/' onClick={() => { toggleActive() }}>
              <Youtube />
            </Link>
          </div>

          <div className={styles.sidebar}>
            <ul className={styles.sidebarUl}>
              {
                block1.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'} /> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              {
                block2.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'} /> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>??????</h3>
              {
                block3.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'} /> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>YouTube ?????????</h3>
              {
                block4.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'} /> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              {
                block5.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'} /> })
              }
            </ul>
            <div className={styles.hideBox}></div>
          </div>
        </div>


        <div className={styles.subSidebar}>
          <ul className={styles.subSidebarUl}>
            {
              miniBlock.map((a, i) => { return <SidebarBlock children={a} key={i} sub={'sub'} /> })
            }
          </ul>
        </div>
      </>
    )
  } else if (!isOpen && medium) {
    return (
      <>
        <div className={isActive ? styles.backgroundActive : styles.backgroundHidden}></div>
        <div className={isActive ? styles.totalBoxActive : styles.totalBoxHidden}>
          <div className={styles.box1}>
            <button className={styles.menu} onClick={() => {toggleMenu(); toggleActive()}}><Menu /></button>
            <Link className={styles.youtube} to='/' onClick={() => {toggleActive()}}>
              <Youtube />
            </Link>
          </div>

          <div className={styles.sidebar}>
            <ul className={styles.sidebarUl}>
              {
                block1.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              {
                block2.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>??????</h3>
              {
                block3.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>YouTube ?????????</h3>
              {
                block4.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              {
                block5.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'} /> })
              }
            </ul>
            <div className={styles.hideBox}></div>
          </div>
        </div>

        <div className={styles.subSidebar}>
          <ul className={styles.subSidebarUl}>
            {
              miniBlock.map((a, i) => { return <SidebarBlock children={a} key={i} sub={'sub'} /> })
            }
          </ul>
        </div>
      </>
    )
  } else if (isOpen && minimum) {
    return (
      <>
        <div className={isActive ? styles.backgroundActive : styles.backgroundHidden}></div>
        <div className={isActive ? styles.totalBoxActive : styles.totalBoxHidden}>
          <div className={styles.box1}>
            <button className={styles.menu} onClick={() => {toggleMenu(); toggleActive()}}><Menu /></button>
            <Link className={styles.youtube} to='/' onClick={() => {toggleActive()}}>
              <Youtube />
            </Link>
          </div>

          <div className={styles.sidebar}>
            <ul className={styles.sidebarUl}>
              {
                block1.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              {
                block2.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>??????</h3>
              {
                block3.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>YouTube ?????????</h3>
              {
                block4.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              {
                block5.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'} /> })
              }
            </ul>
            <div className={styles.hideBox}></div>
          </div>
        </div>
      </>
    )
  } else if (!isOpen && minimum) {
    return (
      <>
        <div className={isActive ? styles.backgroundActive : styles.backgroundHidden}></div>
        <div className={isActive ? styles.totalBoxActive : styles.totalBoxHidden}>
          <div className={styles.box1}>
            <button className={styles.menu} onClick={() => {toggleMenu(); toggleActive()}}><Menu /></button>
            <Link className={styles.youtube} to='/' onClick={() => {toggleActive()}}>
              <Youtube />
            </Link>
          </div>

          <div className={styles.sidebar}>
            <ul className={styles.sidebarUl}>
              {
                block1.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              {
                block2.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>??????</h3>
              {
                block3.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>YouTube ?????????</h3>
              {
                block4.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              {
                block5.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'} /> })
              }
            </ul>
            <div className={styles.hideBox}></div>
          </div>
        </div>
      </>
    )
  }
}