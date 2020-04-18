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
		//let img = this.props.pics[0];
		return (
		  <div className="titleBar">
				<div className="titleBarText"> 
				{/* onClick={() => this.props.changePageNumber(0)}> */}
					<h1><Link to={"/home"}> Studio Ghibli Films </Link></h1>
				</div>
				<div className="titleBarAbout"> 
				 {/* onClick={() => this.props.loadAboutPage()}> */}
					<h1><Link to={"/about"}> About</Link></h1>
				</div>
				<div className="titleBarLogin"> 
				{/* onClick={() => 
					this.props.loadLoginPage()}> */}
					<h1><Link className="nav-link" to={"/login"}>Login</Link></h1>
				</div>
				
				
		  </div>
		);
  }
}

export default Title;
