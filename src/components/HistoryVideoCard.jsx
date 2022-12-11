import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './css/HistoryVideoCard.module.css'
import Sidebar from "./Sidebar";
import HistoryBtnBar from "./ui/HistoryBtnBar";

export default function HistoryVideoCard({video}) {
  const navigate = useNavigate();
  const {title, thumbnails, channelTitle, description} = video.snippet

	return (
		<>
			<div className={styles.totalBox} onClick={() => { navigate(`/youtube/watch/${video.id}`, { state: { video } }) }}>
				<img className={styles.img} src={thumbnails.medium.url} alt={title} />
				<div className={styles.textBox}>
					<p className={styles.title}>{title}</p>
					<p className={styles.subText}>{channelTitle}</p>
					<p className={styles.desText}>{description}</p>
				</div>
			</div>
		</>
	)
}
