import React from "react";
import NavigationItems from "./../NavigationItems/NavigationItems";

import classes from "./SideDrawer.css";
import Logo from "./../../Logo/Logo";
const SideDrawer = () => {
	//todo
	return (
		<div className={classes.SideDrawer}>
			<Logo />
			<nav>
				<NavigationItems />
			</nav>
		</div>
	);
};

export default SideDrawer;
