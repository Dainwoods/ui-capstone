import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 1
		};

	}
  
	changeIndex = () => {
		let ind = this.state.index;
		ind = ind + 1;
		if(ind > 6) {
			ind = 0;
		}
		this.setState({index: ind});
	}

	render() {
		let img = this.props.pics[0];
		return (
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
		);
  }
}

export default Title;
