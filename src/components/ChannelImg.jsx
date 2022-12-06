import React from "react"
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

import styles from './css/ChannelImg.module.css'

export default function ChannelImg({ id }) {
  const {youtube} = useYoutubeApi();
  const {data: items} = useQuery(['channel', id], () => youtube.channelDetail(id));

  return (
    <div className={styles.box}>
    {
      items && <img className={styles.img} src={items.snippet.thumbnails.default.url} />
    }
    </div>
  )
}