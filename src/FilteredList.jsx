import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

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
			favorites: false,
			movieList: [
				{ name: "Your Name", genre: "Drama", director: "Makoto Shinkai", year: 2016, pic: './images/your-name.jpg', favorite: './images/stargrey.png' },
				{ name: "A Silent Voice", genre: "Romance", director: "Naoko Yamada", year: 2016, pic: './images/silent-voice.jpg', favorite: './images/stargrey.png' },
				{ name: "Spirited Away", genre: "Fantasy", director: "Hayao Miyazaki", year: 2001, pic: './images/spirited-away.jpg', favorite: './images/stargrey.png' },
				{ name: "Princess Mononoke", genre: "Fantasy", director: "Hayao Miyazaki", year: 1997, pic: './images/princess-mononoke.jpg', favorite: './images/stargrey.png' },
				{ name: "My Neighboor Totoro", genre: "Fantasy", director: "Hayao Miyazaki", year: 1988, pic: './images/totoro.jpg', favorite: './images/stargrey.png' },
				{ name: "Kiki's Delivery Service", genre: "Drama", director: "Hayao Miyazaki", year: 1989, pic: './images/kiki.jpg', favorite: './images/stargrey.png' },
				{ name: "Grave of the Fireflies", genre: "War", director: "Isao Takahata", year: 1988, pic: './images/fireflies.jpg', favorite: './images/stargrey.png' },
				{ name: "Ponyo", genre: "Drama", director: "Hayao Miyazaki", year: 2008, pic: './images/ponyo.jpg', favorite: './images/stargrey.png' },
				{ name: "Howl's Moving Castle", genre: "Fantasy", director: "Hayao Miyazaki", year: 2004, pic: './images/howl.jpg', favorite: './images/stargrey.png' },
				{ name: "Porco Rosso", genre: "Fantasy", director: "Hayao Miyazaki", year: 1992, pic: './images/porco.jpg', favorite: './images/stargrey.png' },
				{ name: "Castle in the Sky", genre: "Action", director: "Hayao Miyazaki", year: 1986, pic: './images/castle.jpg', favorite: './images/stargrey.png' },
				{ name: "The Cat Returns", genre: "Drama", director: "Hiroyuki Morita", year: 2002, pic: './images/cat.jpg', favorite: './images/stargrey.png' }
			]
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
  

	render() {
	  
		let movies;
		if(this.state.sort === "Newest First") {
			movies = this.state.movieList.filter(this.filterAndSearch).sort((a, b) => (a.year < b.year) ? 1 : -1);
		}
		else {
			movies = this.state.movieList.filter(this.filterAndSearch).sort((a, b) => (a.year > b.year) ? 1 : -1);
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
					<Dropdown.Item eventKey="drama" onClick={this.onSelectFilterTypeGenre}>
						Drama
					</Dropdown.Item>
					<Dropdown.Item eventKey="romance" onClick={this.onSelectFilterTypeGenre}>
						Romance
					</Dropdown.Item>
					<Dropdown.Item eventKey="fantasy" onClick={this.onSelectFilterTypeGenre}>
						Fantasy
					</Dropdown.Item>
					<Dropdown.Item eventKey="war" onClick={this.onSelectFilterTypeGenre}>
						War
					</Dropdown.Item>
					<Dropdown.Item eventKey="action" onClick={this.onSelectFilterTypeGenre}>
						Action
					</Dropdown.Item>
				</DropdownButton>
				
				<DropdownButton title={this.state.director} id="dropdown-basic-button" className="dropdownMenu1">
					<Dropdown.Item eventKey="all" onClick={this.onSelectFilterTypeDirector}>
						All Directors
					</Dropdown.Item>
					<Dropdown.Item eventKey="shinkai" onClick={this.onSelectFilterTypeDirector}>
						Makoto Shinkai
					</Dropdown.Item>
					<Dropdown.Item eventKey="yamada" onClick={this.onSelectFilterTypeDirector}>
						Naoko Yamada
					</Dropdown.Item>
					<Dropdown.Item eventKey="miyazaki" onClick={this.onSelectFilterTypeDirector}>
						Hayao Miyazaki
					</Dropdown.Item>
					<Dropdown.Item eventKey="takahata" onClick={this.onSelectFilterTypeDirector}>
						Isao Takahata
					</Dropdown.Item>
					<Dropdown.Item eventKey="morita" onClick={this.onSelectFilterTypeDirector}>
						Hiroyuki Morita
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
						<div class="container">
							<img src={ require(`${ movie.pic }`)} class="movieImage"/>
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
			</div>
		);
	}
}

export default FilteredList;
