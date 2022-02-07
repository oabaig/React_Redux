import React from 'react';

export default function ImageList(props) {
	const images = props.images.map(({ alt_description, id, urls }) => {
		return <img key={id} src={urls.regular} alt={alt_description} />;
	});

	return <div>{images}</div>;
}
