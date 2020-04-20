import React, { Component } from "react";
import aboutImg from './images/aboutImg.jpg'
import './About.css'
import Title from "./Title";
import Carousel from "./Carousel";
import FilteredList from "./FilteredList";
import Ending from "./Ending";
class MainPage extends Component {
    render () {
        return (
        <div className="App">

            <Carousel pics={this.props.pics} />

            <FilteredList parentCallback={this.props.loadMoviePage} movieList={this.props.movieList}/>

            <Ending totoro={this.props.totoro} speedUp={this.props.speedUp}/>
        </div>
        );
    }
}

export default MainPage;