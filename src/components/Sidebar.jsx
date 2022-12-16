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
    {title: '홈', icon: <Home/>, nav: '/'},
    {title: 'Shorts', icon: <Shorts/>},
    {title: '구독', icon: <Subscribe/>},
    {title: 'Originals', icon: <Originals/>},
    {title: 'YouTube Music', icon: <YoutubeMusic/>},
  ])

  const [block2] = useState([
    {title: '보관함', icon: <Feed/>, nav: '/youtube/feed'},
    {title: '시청 기록', icon: <History/>, nav: '/youtube/feed/history'},
    {title: '내 동영상', icon: <MyVideo/>},
    {title: '내 영화', icon: <MyMovie/>},
    {title: '나중에 볼 동영상', icon: <Later/>},
    {title: '오프라인 저장 동영상', icon: <Saved/>},
    {title: '좋아요 표시한 동영상', icon: <Liked/>, nav: '/youtube/feed/liked'},
  ])

  const [block3] = useState([
    {title: '인기 급상승', icon: <Hot/>},
    {title: '음악', icon: <Music/>},
    {title: '영화', icon: <MyMovie/>},
    {title: '게임', icon: <Game/>},
    {title: '스포츠', icon: <Sports/>},
    {title: '학습', icon: <Education/>},
  ])

  const [block4] = useState([
    {title: '크리에이터 스튜디오', icon: <Studio/>},
    {title: 'YouTube Music', icon: <YoutubeMusicRed/>},
    {title: 'YouTube Kids', icon: <YoutubeKids/>},
    {title: 'YouTube TV', icon: <YoutubeTV/>},
  ])

  const [block5] = useState([
    {title: '설정', icon: <Setting/>},
    {title: '신고 기록', icon: <Notify/>},
    {title: '고객센터', icon: <Center/>},
    {title: '의견 보내기', icon: <Send/>},
  ])

  const [miniBlock] = useState([
    {title: '홈', icon: <Home/>, nav: '/'},
    {title: 'Shorts', icon: <Shorts/>},
    {title: '구독', icon: <Subscribe/>},
    {title: 'Originals', icon: <Originals/>},
    {title: 'YouTube Music', icon: <YoutubeMusic/>},
    {title: '보관함', icon: <Feed/>, nav: '/youtube/feed'},
    {title: '오프라인 저장 동영상', icon: <Saved/>}
  ])

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

  const {isOpen, toggleMenu} = useContext(MenuContext);
  //isOpen은 이제 페이지 로드 시 기본값이 되는 사이드바의 상태이다.

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
          <h3 className={styles.sidebarH3}>탐색</h3>
          {
            block3.map((a, i) => { return <SidebarBlock children={a} key={i} /> })
          }
        </ul>
        <ul className={styles.sidebarUl}>
          <h3 className={styles.sidebarH3}>YouTube 더보기</h3>
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
              <h3 className={styles.sidebarH3}>탐색</h3>
              {
                block3.map((a, i) => { return <SidebarBlock children={a} key={i} detail={'detail'} /> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>YouTube 더보기</h3>
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
              <h3 className={styles.sidebarH3}>탐색</h3>
              {
                block3.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>YouTube 더보기</h3>
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
              <h3 className={styles.sidebarH3}>탐색</h3>
              {
                block3.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>YouTube 더보기</h3>
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
              <h3 className={styles.sidebarH3}>탐색</h3>
              {
                block3.map((a, i) => { return <SidebarBlock children={a} key={i}  detail={'detail'}/> })
              }
            </ul>
            <ul className={styles.sidebarUl}>
              <h3 className={styles.sidebarH3}>YouTube 더보기</h3>
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