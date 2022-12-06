import { useQuery } from "@tanstack/react-query";
import React from "react"
import { useParams } from "react-router-dom"
import styles from './css/Videos.module.css'

import { useYoutubeApi } from "../context/YoutubeApiContext";

import VideoCard from "../components/VideoCard"
import ButtonBar from "../components/ButtonBar"
import Sidebar from "../components/Sidebar";

export default function Videos() {
  const {keyword} = useParams();
  const {youtube} = useYoutubeApi();
  const {isLoading, error, data: videos} = useQuery(
    ['videos', keyword], () => youtube.search(keyword));

  return (
    <>
    <Sidebar/>
    <div className={styles.box}>
      <ButtonBar/>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is Wrong!</p>}
      {videos && 
        <ul className={styles.videosUl}>
          {videos.map(video => <VideoCard key={video.id} video={video}/>)}
        </ul>
      }
    </div>
    </>
  )
}

