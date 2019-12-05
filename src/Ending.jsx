import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

class Ending extends Component {
  constructor(props) {
    super(props);
	
    this.state = {
		speed: .001,
		position: .4,
		dir: -1
    };
	
	setInterval(this.tick, 10);
  }
  
	tick = () => {
		if(this.state.dir === -1) {
			this.setState({position: this.state.position - this.state.speed});
			if(this.state.position <= -.342) {
				this.setState({dir: 1});
			}
		}
		else {
			this.setState({position: this.state.position + this.state.speed});
			if(this.state.position >= .4) {
				this.setState({dir: -1});
			}
		}
	}
  
	speedUp = () => {
		this.setState({speed: this.state.speed + this.props.speedUp});
	}
	
	resetTotoro = () => {
		this.setState({speed: .001});
	};

	render() {
		let styles = {
			transform: 'scaleX(-1)'
		};
		
		let per = this.state.position * 100;
		per = per + '%';
		
		let styles2 = {
			right: per,
			transform: 'scaleX('+this.state.dir+')'
		};
	  
		return (
		  <div className="ending">
			<img className="endingImage2" src={ require(`${ this.props.totoro }`)} style={styles2} onClick={() => this.speedUp()}/>
			<h5 id="TotoroLabel">Click Totoro to speed him up</h5>
			<button id="TotoroButton" onClick={this.resetTotoro}>Reset speed</button>
		  </div>
		);
	}
}

export default Ending;
