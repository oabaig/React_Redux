import React from 'react';
import DecodeHTMLEntities from '../helper functions/helpers';

const VideoDetail = ({ video }) => {
	if (!video) return <></>;

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe src={videoSrc} title={DecodeHTMLEntities(video.snippet.title)} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{DecodeHTMLEntities(video.snippet.title)}</h4>
				<p>{DecodeHTMLEntities(video.snippet.description)}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
