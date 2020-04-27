import React, { Component } from "react";
import Title from "./Title";
import Divider from "./Divider";
import './movie-details.css'

class MoviePage extends Component {
	render() {
		return (
			<div classname="App">

				<Title/>

				<div className="movie-container">

					<div class="movie-img-container">
						<img src={ require(`${ this.props.movie.pic }`)} class="movieImage" id="movieImg"/>
					</div>

				
					<div class="movie-details-container">
						<div class="movie-firstLine">
							<h1 id="movTitle">{this.props.movie.name}</h1>
							<h2 id="genre">{this.props.movie.genre}</h2>
						</div>
						<h3 id="director">{this.props.movie.director}</h3>
						<h4 id="description">{this.props.movie.description}</h4>
						<a href={this.props.movie.storePage}>BUY</a>
					</div>

				</div>

			</div>	
    );
  }
}

export default MoviePage;
