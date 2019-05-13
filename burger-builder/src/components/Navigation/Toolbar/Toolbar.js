import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawewToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => {
	return (
		<header className={classes.Toolbar}>
			<DrawewToggle sideDrawerOpenHandler={props.sideDrawerOpenHandler} />>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<nav className={classes.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
};

export default Toolbar;
