import React from "react";

import Aux from "../../hoc/_Aux";

const Layout = props => {
	return (
		<Aux>
			<div>toolbar,SIdebar backdrop</div>
			<main>{props.children}</main>
		</Aux>
	);
};

export default Layout;
