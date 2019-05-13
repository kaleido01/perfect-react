import React from "react";
import NavigationItems from "./../NavigationItems/NavigationItems";

import classes from "./SideDrawer.css";
import Logo from "./../../Logo/Logo";
import Aux from "./../../../hoc/_Aux";
import Backdrop from "./../../UI/Backdrop/Backdrop";
const SideDrawer = props => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.show) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	return (
		<Aux>
			<Backdrop show={props.show} clicked={props.closed} />
			<div className={attachedClasses.join(" ")}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default SideDrawer;
