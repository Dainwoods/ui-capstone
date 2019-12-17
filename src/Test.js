import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList";
import Title from "./Title";
import Ending from "./Ending";
import './font/Barlow-Regular.ttf'
import './font/Barlow-Bold.ttf'
import './font/KosugiMaru-Regular.ttf'

class Test extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
		  pics: [
			{img: './images/titleImages/porco2.jpg'},
			{img: './images/titleImages/05.jpg'},
			{img: './images/titleImages/06.jpg'},
			{img: './images/titleImages/07.jpg'},
			{img: './images/titleImages/04.jpg'},
			{img: './images/titleImages/09.jpg'},
			{img: './images/titleImages/10.jpg'},
		  ],
		  totoro: './images/endingImages/totoroWalk.gif',
		  speedUp: .0005
		};
	}
	
  render() {
    return (
      <div className="App">
		<Title pics={this.state.pics}/>

		<FilteredList />
		
		<Ending totoro={this.state.totoro} speedUp={this.state.speedUp}/>
      </div>
    );
  }
}

export default Test;
