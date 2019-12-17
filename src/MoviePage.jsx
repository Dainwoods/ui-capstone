import React, { Component } from "react";

class MoviePage extends Component {
	render() {
		return (
			<div className="moviePage">
				<h1>{this.props.movie.name}</h1>
				<h2>{this.props.movie.genre}</h2>
				<h3>{this.props.movie.director}</h3>
				<img src={ require(`${ this.props.movie.pic }`)} class="movieImage"/>
				<h4>{this.props.movie.description}</h4>
				<h4><a href={this.props.movie.storePage}>Link to store</a></h4>
				
			</div>
    );
  }
}

export default MoviePage;
