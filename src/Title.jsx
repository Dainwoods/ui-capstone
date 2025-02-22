import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
  } from "react-router-dom";
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import axios from 'axios';
var loginButton;

class Title extends Component {
	constructor(props) {
		super(props);
		this.loggedIn = this.loggedIn.bind(this);
		this.state = {
			login: false,
		}
	}

	loggedIn = () => {
		let ret = false
		return axios.post('/ifSession', this.state).
			then((res) => {
				// if there's a current session, then SHOW LOGOUT
				console.log('posted in title', res.data);
				ret = res.data.session;
				if (res.data.session) {
					// then show logout
					console.log('check this session out in title: ', res.data);
					
					this.setState({login: res.data.session});
					return true
				// if there's no session, don't show option of logging out
				} else {
					return false
				}

			}).catch((error) => console.log(error));
		console.log('returning: ', ret);
		//return ret;
	}
	componentDidMount(){
		this.loggedIn();
	  }
	render() {
		

		return (
		  <div className="title-container">
				<div className="titleBarText"> 
					<h1><NavLink to={"/"}
					style={{
							textDecoration: "none",
						}}
						activeStyle={{
    					fontWeight: "bold",
    					color: "black",
    					textDecoration: "none"
  					}} class="title-studio">Studio Ghibli</NavLink></h1>

				</div>

				<div className="menu-container"> 

					<h1><NavLink to={"/about"}
						style={{
							textDecoration: "none",
						}}

						activeStyle={{
	    					fontWeight: "bold",
	    					color: "black",
	    					textDecoration: "none"
						}}
						class="title-about-link">About</NavLink></h1>
					
					{this.state.login ? <LogoutButton /> : <LoginButton />}


					{/* this.props.hasUser ? this.props.user : Login */}

					{/*<h1><NavLink to={"/login"}
						style={{
							textDecoration: "none",
						}}
						activeStyle={{
	    					fontWeight: "bold",
	    					color: "black",
	    					textDecoration: "none"
						}}
						class="title-about-link">Login</NavLink></h1>*/}


					{/*<h1><NavLink to={"/about"}>About</NavLink></h1>
										<h1><NavLink className="nav-link" to={"/login"}>Login</NavLink></h1>*/}
				</div>
		  </div>
		);
  }
}

export default Title;
