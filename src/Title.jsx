import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import Login from "./Login.js"

class Title extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div className="title-container">
				<div className="titleBarText"> 
					<h1><Link to={"/home"}>Studio Ghibli</Link></h1>
				</div>

				<div className="menu-container"> 
					<h1><Link to={"/about"}>About</Link></h1>
					<h1><Link className="nav-link" to={"/login"}>Login</Link></h1>
				</div>
		  </div>
		);
  }
}

export default Title;
