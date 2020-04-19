import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
  } from "react-router-dom";

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 1,
			brightness: 100
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

	render() {
		//let img = this.props.pics[0];
		/*return (
		  <div className="title" onClick={() => this.props.changePageNumber(0)}>
			<div className="titleText">
				<h1>日本のえいが</h1>
				<h2>JAPANESE MOVIES</h2>
				<h5>CLICK IMAGE TO CHANGE SCENE</h5>
			</div>
			<div className="titleImage">
				<img className="titleImage2" src={ require(`${ this.props.pics[this.state.index].img }`)} onClick={() => this.changeIndex()} />
			</div>
		  </div>
		);*/

		return (


			<div className="title-container-mainpage">


				<img className="carouselImage" src={ require(`${ this.props.pics[this.state.index].img }`)} style={{filter: "brightness(" + this.state.brightness + "%)"}} />

				<div class="title-centered">

					<h1><NavLink to={"/home"}
						activeStyle={{
    					fontWeight: "bold",
    					color: "white",
    					textDecoration: "none"
  					}}>Studio Ghibli</NavLink></h1>

				</div>

				<div class="menu-container">

					<h1><NavLink to={"/about"}
						activeStyle={{
    					fontWeight: "bold",
    					color: "white",
    					textDecoration: "none"
					}}>About</NavLink></h1>

					<h1><NavLink to={"/login"}
						activeStyle={{
    					fontWeight: "bold",
    					color: "white",
    					textDecoration: "none"
					}}>Login</NavLink></h1>

				</div>

			</div>


		);
  }
}

export default Carousel;
