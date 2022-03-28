import './videoitem.css';
import React from 'react';
import DecodeHTMLEntities from '../helper functions/helpers';

const VideoItem = ({ video, OnVideoSelect }) => {
	return (
		<div onClick={() => OnVideoSelect(video)} className="video-item item">
			<img
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
				className="ui image"
			/>
			<div className="content">
				<div className="header">{DecodeHTMLEntities(video.snippet.title)}</div>
			</div>
		</div>
	);
};

export default VideoItem;
