import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
	Summer: {
		text: 'Lets hit the beach',
		iconName: 'sun',
	},
	Winter: {
		text: 'Burr it is cold',
		iconName: 'snowflake',
	},
};

function GetSeason(latitude, month) {
	if (month > 2 && month < 9) return latitude > 0 ? 'Summer' : 'Winter';
	return latitude > 0 ? 'Winter' : 'Summer';
}

export default function SeasonDisplay(props) {
	const season = GetSeason(props.latitude, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
}
