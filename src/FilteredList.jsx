import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';
import { Link } from 'react-router-dom'

class FilteredList extends Component {
	constructor(props) {
		super(props);

		//The state is just a list of key/value pairs (like a hashmap)
		//TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
		this.state = {
			search: "",
			genre: "All Genres",
			director: "All Directors",
			sort: "Newest First",
			favorites: false

		};

	}

	onSelectFilterTypeGenre = event => {
		this.setState({genre: event.target.innerHTML});
	};

	onSelectFilterTypeDirector = event => {
		this.setState({director: event.target.innerHTML});
	};

	onSelectFilterTypeSort = event => {
		this.setState({sort: event.target.innerHTML});
	};

	resetFilters = () => {
		this.setState({genre: "All Genres"});
		this.setState({director: "All Directors"});
		this.setState({sort: "Newest First"});
		this.setState({favorites: false});
	};

	toggleFavorites = () => {
		this.setState({favorites: !this.state.favorites});
	};

	matchesFilterType = item => {
		if(this.state.favorites) {
			return item.favorite === './images/staryellow.jpg' && (this.state.genre === "All Genres" || item.genre === this.state.genre) && (this.state.director === "All Directors" || item.director === this.state.director);
		}
		return (this.state.genre === "All Genres" || item.genre === this.state.genre) && (this.state.director === "All Directors" || item.director === this.state.director);
	}

	filterAndSearch = item => {
		return item.name.toLowerCase().search(this.state.search) !== -1 && this.matchesFilterType(item);
	}

	favorited = (movie) => {
		if(movie.favorite === './images/stargrey.png') {
			movie.favorite = './images/staryellow.jpg';
		}
		else {
			movie.favorite = './images/stargrey.png';
		}
		this.setState({genre: this.state.genre});
	}

	sendData = (pageNumber) => {
		this.props.parentCallback(pageNumber);
	}


	render() {

		let movies;
		if(this.state.sort === "Newest First") {
			movies = this.props.movieList.filter(this.filterAndSearch).sort((a, b) => (a.year < b.year) ? 1 : -1);
		}
		else {
			movies = this.props.movieList.filter(this.filterAndSearch).sort((a, b) => (a.year > b.year) ? 1 : -1);
		}

		let img = './images/endingImages/totoroWalk.gif'


		return (

			<div className="filter-list">

				<button id="reset" onClick={this.resetFilters}>Reset</button>
				<button id="favorites" onClick={this.toggleFavorites}>Toggle Favorites</button>

				<DropdownButton title={this.state.genre} id="dropdown-basic-button" className="dropdownMenu1">
					<Dropdown.Item eventKey="all" onClick={this.onSelectFilterTypeGenre}>
						All Genres
					</Dropdown.Item>
					<Dropdown.Item eventKey="action" onClick={this.onSelectFilterTypeGenre}>
						Action
					</Dropdown.Item>
					<Dropdown.Item eventKey="adventure" onClick={this.onSelectFilterTypeGenre}>
						Adventure
					</Dropdown.Item>
					<Dropdown.Item eventKey="comedy" onClick={this.onSelectFilterTypeGenre}>
						Comedy
					</Dropdown.Item>
					<Dropdown.Item eventKey="drama" onClick={this.onSelectFilterTypeGenre}>
						Drama
					</Dropdown.Item>
					<Dropdown.Item eventKey="fantasy" onClick={this.onSelectFilterTypeGenre}>
						Fantasy
					</Dropdown.Item>
					<Dropdown.Item eventKey="romance" onClick={this.onSelectFilterTypeGenre}>
						Romance
					</Dropdown.Item>
					<Dropdown.Item eventKey="war" onClick={this.onSelectFilterTypeGenre}>
						War
					</Dropdown.Item>
				</DropdownButton>

				<DropdownButton title={this.state.director} id="dropdown-basic-button" className="dropdownMenu1">
					<Dropdown.Item eventKey="all" onClick={this.onSelectFilterTypeDirector}>
						All Directors
					</Dropdown.Item>
					<Dropdown.Item eventKey="miyazaki_g" onClick={this.onSelectFilterTypeDirector}>
						Goro Miyazaki
					</Dropdown.Item>
					<Dropdown.Item eventKey="miyazaki_h" onClick={this.onSelectFilterTypeDirector}>
						Hayao Miyazaki
					</Dropdown.Item>
					<Dropdown.Item eventKey="yonebayashi" onClick={this.onSelectFilterTypeDirector}>
						Hiromasa Yonebayashi
					</Dropdown.Item>
					<Dropdown.Item eventKey="morita" onClick={this.onSelectFilterTypeDirector}>
						Hiroyuki Morita
					</Dropdown.Item>
					<Dropdown.Item eventKey="takahata" onClick={this.onSelectFilterTypeDirector}>
						Isao Takahata
					</Dropdown.Item>
					<Dropdown.Item eventKey="mochizuki" onClick={this.onSelectFilterTypeDirector}>
						Tomomi Mochizuki
					</Dropdown.Item>
					<Dropdown.Item eventKey="kondo" onClick={this.onSelectFilterTypeDirector}>
						Yoshifumi Kondo
					</Dropdown.Item>
				</DropdownButton>

				<DropdownButton title={this.state.sort} id="dropdown-basic-button" className="dropdownMenu2">
					<Dropdown.Item eventKey="newestFirst" onClick={this.onSelectFilterTypeSort}>
						Newest First
					</Dropdown.Item>
					<Dropdown.Item eventKey="oldestFirst" onClick={this.onSelectFilterTypeSort}>
						Oldest First
					</Dropdown.Item>
				</DropdownButton>




				<div className="movieGrid">
				{movies.map((movie, index) => {
					return <div className="movieList" key={movie.name}>

						 <div class="container" onClick={() => this.sendData(movie.index)}>
				<Link to={'/moviePage'}><img src={ require(`${ movie.pic }`)} class="movieImage"/></Link>
							<div class="middle">
								<div class="text">
									<h3 id="movieTitle" className="movieText">{movie.name}</h3>
									<h5 id="movieDirector" className="movieText">{movie.director} - {movie.year}</h5>
									<h6 id="movieGenre" className="movieText">{movie.genre}</h6>
								</div>
							</div>
						</div>
						<img className="starImage" src={require(`${ movie.favorite }`)} onClick={() => this.favorited(movie)} />
					</div>
				})}

			</div>

			<div class="socialMedia">

				<div>
					<TwitterTimelineEmbed/>
					<a class="twitter-timeline" data-width="600" data-height="500" data-theme="light" href="https://twitter.com/ItsGhibli"></a>
					<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
				</div>	

				<div>
				<InstagramEmbed
				  url='https://instagr.am/p/B9W7AQOlXmh/'
				  maxWidth={400}
				  hideCaption={true}
				  containerTagName='div'
				  protocol=''
				  injectScript
				  onLoading={() => {}}
				  onSuccess={() => {}}
				  onAfterRender={() => {}}
				  onFailure={() => {}}
				/>
				</div>

			</div>			

			</div>
		);
	}
}

export default FilteredList;
