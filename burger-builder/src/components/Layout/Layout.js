import React from "react";

import Aux from "../../hoc/_Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";

const Layout = props => {
	return (
		<Aux>
			<SideDrawer />
			<Toolbar />
			<main className={classes.Content}>{props.children}</main>
		</Aux>
	);
};

export default Layout;
