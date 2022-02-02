import React from 'react';

export default function LoadingIcon(props) {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">{props.message}</div>
		</div>
	);
}

LoadingIcon.defaultProps = {
	message: 'Loading...',
};
