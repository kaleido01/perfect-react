import React, { Component } from "react";

import Aux from "../../hoc/_Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
	state = {
		showSideDrawer: true
	};
	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	render() {
		return (
			<Aux>
				<SideDrawer
					closed={this.sideDrawerClosedHandler}
					show={this.state.showSideDrawer}
				/>
				<Toolbar />
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
