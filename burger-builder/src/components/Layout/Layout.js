import React from "react";

import Aux from "../../hoc/_Aux";
import classes from "./Layout.css";

const Layout = props => {
	return (
		<Aux>
			<div>toolbar,SIdebar backdrop</div>
			<main className={classes.Content}>{props.children}</main>
		</Aux>
	);
};

export default Layout;
