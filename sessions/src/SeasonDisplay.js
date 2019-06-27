import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const config = {
	summer: {
		text: 'Bezan berim sahel!',
		icon: 'sun',
	},
	winter: {
		text: 'Waaay cheghadr sarde!',
		icon: 'snowflake',
	},
};

export default (props) => {
	const season         = getSeason(props.lat, new Date().getMonth());
	const { text, icon } = config[season];

	return (
		<div className={ `season-display ${ season }` }>
			<i className={ `icon-left massive ${ icon } icon` }/>
			<h1>{ text }</h1>
			<i className={ `icon-right massive ${ icon } icon` }/>
		</div>
	);
};
