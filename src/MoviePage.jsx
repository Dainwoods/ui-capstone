import React, { Component } from "react";

class MoviePage extends Component {
	render() {
		return (
			<div className="moviePage">
				<div className="movieIntro">
					<h1 className="movTitle">{this.props.movie.name}</h1>
					<h2>{this.props.movie.genre}</h2>
					<h3>{this.props.movie.director}</h3>
				</div>
				<div className="movieDetails">
					<div className="movVisuals">
						<img src={ require(`${ this.props.movie.pic }`)} class="movieImage" id="moviePageImg"/>
						<h4><a href={this.props.movie.storePage}>Purchase</a></h4>
					</div>
					<h4 class="movie-description">{this.props.movie.description}</h4>
				</div>
			</div>
    );
  }
}

export default MoviePage;
