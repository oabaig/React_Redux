import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, OnVideoSelect }) => {
	const renderedList = videos.map((video) => {
		return <VideoItem OnVideoSelect={OnVideoSelect} video={video} />;
	});

	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
