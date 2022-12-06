import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

import ChannelImg from "../components/ChannelImg";
import DetailButton from "../components/ui/DetailButton";
import CommentCard from "../components/ui/CommentCard";

import styles from './css/VideoDetail.module.css'

export default function VideoDetail() {
  const {state: {video}} = useLocation();
  const {youtube} = useYoutubeApi();
  const {data: videoDetail} = useQuery(['videoDetail', video.id], () => youtube.videoDetail(video.id));
  const {data: channelDetail} = useQuery(['channelDetail', video.snippet.channelId], () => youtube.channelDetail(video.snippet.channelId))
  const {data: comments} = useQuery(['comment', video.id], () => youtube.commentThread(video.id));

  const [text1] = useState([
    {title: '구독'}
  ])

  const [text2] = useState([
    {title: '좋아요'},
    {title: '싫어요'},
    {title: '공유'},
    { title: '오프라인 저장' },
    { title: '클립' },
    { title: '저장' },
    { title: '기타' }
  ])

  const [text3] = useState([
    {title: '정렬 기준'}
  ])

  return (
    <section className={styles.leftBox}>

      <iframe id="player" type="text/html" width="1080" height="607"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameborder="0"></iframe>
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
            text2.map((a) => {
              return <DetailButton text={a.title} />
            })
          }
        </div>
      </div> {/* channel Info box */}

      <div className={styles.desBox}>
        <div className={styles.desInfoBox}>
          {videoDetail && <p>조회수 {videoDetail.statistics.viewCount}회</p>}
          <p className={styles.pubText}>{video.snippet.publishedAt}</p>
        </div>
        <p>{video.snippet.description}</p>
      </div>

      <div className={styles.comBtnBox}>
        {videoDetail && <p className={styles.comCount}>댓글 {videoDetail.statistics.commentCount}개</p>}
        <button className={styles.comRangeBtn}>{text3[0].title}</button>
      </div>

      <div className={styles.comIntBox}>
        <div className={styles.myProfile}></div>
        <input className={styles.input} placeholder='댓글 추가...'/>
      </div>

      <div className={styles.comBox}>
        {comments &&
          comments.data.items.map((a) => {return <CommentCard comment={a}/> })
        }
      </div>
    </section> //left box
  )
}