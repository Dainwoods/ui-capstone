import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
  } from "react-router-dom";
import Title from "./Title";
import axios from 'axios';
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
var loginButton;

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.loggedIn = this.loggedIn.bind(this);
		this.state = {
			index: 1,
			brightness: 100,
			login: false
		};
		this.tickID = setInterval(this.tick, 5 * 1000);
		this.firstLoop = true;
	}

	changeIndex = () => {
		let ind = this.state.index;
		ind = ind + 1;
		if(ind > 6) {
			ind = 0;
		}
		this.setState({index: ind});
		this.fadeInID = setInterval(this.fadeIn, .25 * 1000);
		this.firstLoop = true;
	}

	fadeOut = () => {
		this.setState({brightness: this.state.brightness - 1})
		if(this.state.brightness === 0) {
			clearInterval(this.fadeOutID);
			this.changeIndex();

		}
	}

	fadeIn = () => {
		this.setState({brightness: this.state.brightness + 1})
		if(this.firstLoop) {
			this.firstLoop = false;
			clearInterval(this.fadeInID);
			this.fadeInID = setInterval(this.fadeIn, .01 * 1000);
		}
		if(this.state.brightness == 100) {
			clearInterval(this.fadeInID);
			this.tickID = setInterval(this.tick, 5 * 1000);
		}
	}

	tick = () => {
		clearInterval(this.tickID);
		this.fadeOutID = setInterval(this.fadeOut, .01 * 1000);

	}

	loggedIn = () => {
		let ret = false;
		return axios.post('/ifSession', this.state).
			then((res) => {
				// if there's a current session, then SHOW LOGOUT
				console.log('still not called');
				ret = res.data.session;
				if (res.data.session) {
					// then show logout
					this.setState({login: true});
					return true
				// if there's no session, don't show option of logging out
				} else {
					return false
				}

			}).catch((error) => console.log(error));
	}
	componentDidMount(){
		this.loggedIn();
	  }

	render() {

		return (




			<div className="title-container-mainpage">


				<img className="carouselImage" src={ require(`${ this.props.pics[this.state.index].img }`)} style={{filter: "brightness(" + this.state.brightness + "%)"}} />

				<div class="title-centered">

					<h1>STUDIO GHIBLI</h1>

				</div>

				
				<div class="menu-container">

					<h1><NavLink to={"/about"}
						style={{
							textDecoration: "none",
							":hover": { background: "green" }
						}}
						activeStyle={{
    					fontWeight: "bold",
    					color: "white",
    					textDecoration: "none"
					}} class="carousel-about-link">About</NavLink></h1>

					{/*{loginButton}*/}

					<h1><NavLink to={"/login"}
						style={{
							textDecoration: "none",
						}}
						activeStyle={{
    					fontWeight: "bold",
    					color: "white",
    					textDecoration: "none"
					}} class="carousel-login-link">{this.state.login ? <LogoutButton/> : <LoginButton/>}</NavLink></h1>

				</div>




			</div>


		);
  }
}

export default Carousel;
