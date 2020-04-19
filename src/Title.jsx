import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
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
					<h1><NavLink to={"/home"}
						activeStyle={{
    					fontWeight: "bold",
    					color: "black",
    					textDecoration: "none"
  					}}>Studio Ghibli</NavLink></h1>

				</div>

				<div className="menu-container"> 

					<h1><NavLink to={"/about"}
						activeStyle={{
    					fontWeight: "bold",
    					color: "black",
    					textDecoration: "none"
					}}>About</NavLink></h1>

					<h1><NavLink to={"/login"}
						activeStyle={{
    					fontWeight: "bold",
    					color: "black",
    					textDecoration: "none"
					}}>Login</NavLink></h1>

					{/*<h1><NavLink to={"/about"}>About</NavLink></h1>
										<h1><NavLink className="nav-link" to={"/login"}>Login</NavLink></h1>*/}
				</div>
		  </div>
		);
  }
}

export default Title;
