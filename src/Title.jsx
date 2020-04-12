import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

class Title extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		//let img = this.props.pics[0];
		return (
		  <div className="titleBar">
				<div className="titleBarText" onClick={() => this.props.changePageNumber(0)}>
					<h1>Studio Ghibli Films</h1>
				</div>
				<div className="titleBarAbout" onClick={() => this.props.loadAboutPage()}>
					<h1>About</h1>
				</div>
				<div className="titleBarLogin" onClick={() => this.props.loadLoginPage()}>
					<h1>Login</h1>
				</div>
		  </div>
		);
  }
}

export default Title;
