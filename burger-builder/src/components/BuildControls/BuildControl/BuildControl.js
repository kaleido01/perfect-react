import React from "react";

import classes from "./BuildControl.css";

const BuildControll = props => {
	return (
		<div className={classes.BuildControll}>
			<div className={classes.Label}>{props.label}</div>
			<button className={classes.Less}>Less</button>
			<button className={classes.More}>more</button>
		</div>
	);
};

export default BuildControll;
