import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "react-responsive";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { addHistory } from "../api/firebase";

import styles from './css/VideoDetail.module.css'

import ChannelImg from "../components/ChannelImg";
import DetailButton from "../components/ui/DetailButton";
import CommentCard from "../components/ui/CommentCard";
import RelatedVdeosCard from "../components/RelatedVideosCard";
import RelatedBtn from "../components/ui/RelatedBtn";
import Header from "../components/Header";
import DetailSidebar from "../components/DetailSidebar";
import DescriptionBox from "../components/ui/DescriptionBox";

import {ReactComponent as ThumbsUp} from '../svg/thumbsUp.svg'
import {ReactComponent as ThumbsDown} from '../svg/thumbsDown.svg'
import {ReactComponent as Share} from '../svg/share.svg'
import {ReactComponent as Saved} from '../svg/saved.svg'
import {ReactComponent as Clip} from '../svg/clip.svg'
import {ReactComponent as SaveToAdd} from '../svg/saveToAdd.svg'
import {ReactComponent as Asf} from '../svg/asf.svg'
import {ReactComponent as Flag} from '../svg/flag.svg'
import {ReactComponent as Script} from '../svg/script.svg'
import { ReactComponent as RightArrow } from '../svg/rightArrow.svg'
import { ReactComponent as LeftArrow } from '../svg/leftArrow.svg'
import { ReactComponent as Sort } from '../svg/sort.svg'

import profile from '../svg/IMG_4564.jpeg'

export default function VideoDetail() {
  const {state: {video}} = useLocation();
  const {youtube} = useYoutubeApi();
  const {data: videoDetail} = useQuery(['videoDetail', video.id], () => youtube.videoDetail(video.id));
  const {data: channelDetail} = useQuery(['channelDetail', video.snippet.channelId], () => youtube.channelDetail(video.snippet.channelId))
  const {data: comments} = useQuery(['comment', video.id], () => youtube.commentThread(video.id));
  const {data: relatedVideos} = useQuery(['relatedVideos', video.id], () => youtube.relatedVideos(video.id));

  useEffect(() => {
    const videoId = video.id
    addHistory(videoId, video)
  }, [video])


  const [text1] = useState([
    {title: '구독'}
  ])

  const [text2] = useState([
    {title: '좋아요', icon: <ThumbsUp/>},
    {title: '싫어요', icon: <ThumbsDown/>},
    {title: '공유', icon: <Share/>, margin: 'margin'},
    { title: '오프라인 저장', icon: <Saved/>},
    { title: '클립', icon: <Clip/>},
    { title: '저장', icon: <SaveToAdd/>},
    { title: '기타', icon: <Asf/>, subIcon1: <Flag/>, subIcon2: <Script/>}
  ])

  const [text3] = useState([
    { title: '정렬 기준' }
  ])

  const [text4] = useState([
    {title: '모두'},
    {title: '관련 콘텐츠'},
    {title: '실시간'},
    {title: '최근에 업로드된 동영상'}
  ])


  //1310~: 기본 사이드 바 & 토글 시 서브 사이드 바
  //790~1310: 서브 사이드 바 & 토글 시 디테일 사이드 바
  //~789: null & 토글 시 디테일 사이드 바

  // const full = useMediaQuery({
  //   query: "(min-width: 1310px)"
  // })

  // const medium = useMediaQuery({
  //   query: "(min-width: 790px) and (max-width: 1309px)"
  // })

  // const minimum = useMediaQuery({
  //   query: "(max-width: 789px)"
  // })

  const row = useMediaQuery({
    query: "(min-width: 1000px)"
  })

  const column = useMediaQuery({
    query: "(max-width: 999px)"
  })


  const [isRight, setRight] = useState(true)
  //현재 보이는 버튼의 방향이 오른쪽인가? 를 의미함

  if (row) {
    return (
      <>
        <Header detail={'detail'} />
        <DetailSidebar />
        <div className={styles.totalBox}>
          <section className={styles.leftBox}>
            <div className={styles.video}>
              <iframe id="player" type="text/html" width="100%" height="100%"
                src={`http://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
                frameborder="0"></iframe>
            </div>
            <h2 className={styles.vidTitle}>{video.snippet.title}</h2>

            <div className={styles.channelInfoBox}>

              <div className={styles.channelBox}>
                <ChannelImg id={video.snippet.channelId} />
                <div className={styles.titleSubBox}>
                  <h2 className={styles.channelTitle}>{video.snippet.channelTitle}</h2>
                  {channelDetail && <p className={styles.subscriber}>구독자 {channelDetail.statistics.subscriberCount}명</p>}
                </div>
                <DetailButton text={text1[0].title} />
              </div>

              <div className={styles.channelBtnBox}>
                {
                  text2.map((a, i) => {
                    return <>{videoDetail ?
                      <DetailButton videoId={video.id} video={video} text={a.title} key={i} icon={a.icon} likeCount={videoDetail.statistics.likeCount} margin={a.margin} subIcon1={a.subIcon1} subIcon2={a.subIcon2} />
                      : <DetailButton videoId={video.id} video={video} text={a.title} key={i} icon={a.icon} likeCount={31026} margin={a.margin} subIcon1={a.subIcon1} subIcon2={a.subIcon2} />
                    }</>
                  })
                }
              </div>
            </div> {/* channel Info box */}

            {videoDetail &&
              <div>
                <DescriptionBox viewCount={videoDetail.statistics.viewCount} publishedAt={video.snippet.publishedAt} description={video.snippet.description} />
              </div>
            }

            <div className={styles.comBtnBox}>
              {videoDetail && <p className={styles.comCount}>댓글 {videoDetail.statistics.commentCount}개</p>}
              <button className={styles.comRangeBtn}><Sort/><p className={styles.sortText}>{text3[0].title}</p></button>
            </div>

            <div className={styles.comIntBox}>
              <div className={styles.myProfile}><img className={styles.profilePic} src={profile}/></div>
              <input className={styles.input} placeholder='댓글 추가...' />
            </div>

            <div className={styles.comBox}>
              {comments &&
                comments.data.items.map((a) => { return <CommentCard comment={a} /> })
              }
            </div>
          </section>

          <section className={styles.rightBox}>

            <div className={styles.rightBtnBox}>
              <div className={styles.buttonBar}>
                {isRight ?
                  <div className={styles.colorBoxRight}>
                    <div className={styles.dummyBoxRight}>
                      <div className={styles.btnBoxRight}>
                        <button onClick={() => setRight(false)}><RightArrow /></button>
                      </div>
                      <div className={styles.textBox}>
                        <p>다음</p>
                      </div>
                    </div>
                  </div>
                  : <div className={styles.colorBoxLeft}>
                    <div className={styles.dummyBoxLeft}>
                      <div className={styles.btnBoxLeft}>
                        <button onClick={() => setRight(true)}><LeftArrow /></button>
                      </div>
                      <div className={styles.textBox}>
                        <p>이전</p>
                      </div>
                    </div>
                  </div>
                }
                {isRight ?
                  <div className={styles.btnWrapLeft}>
                    {
                      text4.map((a) => { return <RelatedBtn text={a.title} /> })
                    }
                  </div>
                  :
                  <div className={styles.btnWrapRight}>
                    {
                      text4.map((a) => { return <RelatedBtn text={a.title} /> })
                    }
                  </div>
                }
              </div>
            </div>

            <div>
              {
                relatedVideos && relatedVideos.map((a) => { return <RelatedVdeosCard video={a} /> })
              }
            </div>
          </section>

        </div>
      </>
    )
  } else if (column) {
    return (
      <>
        <Header detail={'detail'} />
        <DetailSidebar />
        <div className={styles.totalBoxCol}>
            <div className={styles.videoCol}>
              <iframe id="player" type="text/html" width="100%" height="100%" autoplay="1"
                src={`http://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
                frameborder="0"></iframe>
            </div>
            <h2 className={styles.vidTitle}>{video.snippet.title}</h2>

            <div className={styles.channelInfoBox}>

              <div className={styles.channelBox}>
                <ChannelImg id={video.snippet.channelId} />
                <div className={styles.titleSubBox}>
                  <h2 className={styles.channelTitle}>{video.snippet.channelTitle}</h2>
                  {channelDetail && <p className={styles.subscriber}>구독자 {channelDetail.statistics.subscriberCount}명</p>}
                </div>
                <DetailButton text={text1[0].title} />
              </div>

              <div className={styles.channelBtnBox}>
                {
                  text2.map((a, i) => {
                    return <>{videoDetail ?
                      <DetailButton videoId={video.id} video={video} text={a.title} key={i} icon={a.icon} likeCount={videoDetail.statistics.likeCount} subIcon1={a.subIcon1} subIcon2={a.subIcon2} />
                      : <DetailButton videoId={video.id} video={video} text={a.title} key={i} icon={a.icon} likeCount={31026} subIcon1={a.subIcon1} subIcon2={a.subIcon2} />
                    }</>
                  })
                }
              </div>
            </div> {/* channel Info box */}

            {videoDetail &&
              <div>
                <DescriptionBox viewCount={videoDetail.statistics.viewCount} publishedAt={video.snippet.publishedAt} description={video.snippet.description} />
              </div>
            }

            {/*  */}

            <section className={styles.underBox}>
              <div className={styles.underBtnBox}>
                {
                  text4.map((a) => { return <RelatedBtn text={a.title} /> })
                }
              </div>
              <div>
                {
                  relatedVideos && relatedVideos.map((a) => { return <RelatedVdeosCard video={a} /> })
                }
              </div>
              <button className={styles.viewMoreBtn}><p>더보기</p></button>
            </section>

            {/*  */}

            <div className={styles.comBtnBox}>
              {videoDetail && <p className={styles.comCount}>댓글 {videoDetail.statistics.commentCount}개</p>}
              <button className={styles.comRangeBtn}><Sort/><p className={styles.sortText}>{text3[0].title}</p></button>
            </div>

            <div className={styles.comIntBox}>
              <div className={styles.myProfile}><img className={styles.profilePic} src={profile}/></div>
              <input className={styles.input} placeholder='댓글 추가...' />
            </div>

            <div className={styles.comBox}>
              {comments &&
                comments.data.items.map((a) => { return <CommentCard comment={a} /> })
              }
            </div>
        </div>
      </>
    )
  }
}

