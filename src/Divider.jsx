import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

class Divider extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		//let img = this.props.pics[0];
		return (
		  <hr className="divider"/>
		);
  }
}

export default Divider;
