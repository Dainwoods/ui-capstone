import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LoginButton extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<h1><NavLink to={"/login"}
				style={{
					textDecoration: "none",
				}}
				activeStyle={{
					fontWeight: "bold",
					color: "black",
					textDecoration: "none"
				}}
				class="title-about-link">Login</NavLink>
			</h1>
	    );
  }
}

export default LoginButton;