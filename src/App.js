import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList";
import Title from "./Title";
import Carousel from "./Carousel"
import Ending from "./Ending";
import Divider from "./Divider";
import MoviePage from "./MoviePage";
import './font/Barlow-Regular.ttf'
import './font/Barlow-Bold.ttf'
import './font/KosugiMaru-Regular.ttf'
import AboutPage from "./about"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./Navigation"
import { Link } from 'react-router-dom';

class App extends Component {

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
		  speedUp: .0005,
		  page: 0,
		  currentMovie: 0,
		  movieList: [
				{ name: "The Wind Rises", index: 0, genre: "Drama", director: "Hayao Miyazaki", year: 2013, pic: './images/wind-rises.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/the-wind-rises?product_id=6717',
				description: "Jiro dreams of flying and designing beautiful airplanes, inspired by the famous Italian aeronautical designer Caproni. Nearsighted and unable to be a pilot, he becomes one of the world’s most accomplished airplane designers, experiencing key historical events in an epic tale of love, perseverance, and the challenges of living and making choices in a turbulent world."},
				{ name: "Whisper Of The Heart", index: 1, genre: "Drama", director: "Yoshifumi Kondo", year: 1995, pic: './images/whisper.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/whisper-of-the-heart?product_id=6660',
					description: "A chance encounter with a mysterious cat sends Shizuku, a quiet schoolgirl, on a quest for her true talent. Together with Seiji, a boy determined to follow his dreams, and enchanted by The Baron, a magical cat figurine who helps her listen to the whispers of her heart, Shizuku embarks on a life-changing adventure that takes her beyond the boundaries of her imagination. This beautiful tale based on a screenplay from Hayao Miyazaki will delight and amaze audiences of all ages!"},
				{ name: "When Marnie Was There", index: 2, genre: "Drama", director: "Hiromasa Yonebayashi", year: 2014, pic: './images/marnie.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/when-marnie-was-there?product_id=6719',
					description: "When shy, artistic Anna travels to the seaside to stay with relatives, she stumbles upon an old mansion surrounded by marshes, and the mysterious young girl, Marnie, who lives there. The two girls instantly form a unique connection and friendship that blurs the lines between fantasy and reality. As the days go by, a nearly magnetic pull draws Anna back to the Marsh House again and again, and she begins to piece together the truth surrounding her strange new friend."},
				{ name: "Tales From Earthsea", index: 3, genre: "Adventure", director: "Goro Miyazaki", year: 2006, pic: './images/earthsea.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/tales-from-earthsea?product_id=6668',
					description: "As crops dwindle and dragons reappear, mankind stands on the verge of total chaos. Lord Archmage Sparrowhawk, a powerful wizard, and Arren, a troubled young prince, search for the force behind this mysterious imbalance that threatens to destroy the land of Earthsea."},
				{ name: "The Tale Of The Princess Kaguya", index: 4, genre: "Drama", director: "Isao Takahata", year: 2013, pic: './images/kaguya.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/the-tale-of-the-princess-kaguya?product_id=6715',
					description: "Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her – but ultimately she must confront her fate, the punishment for her crime."},
				{ name: "The Secret World of Arrietty", index: 5, genre: "Adventure", director: "Hiromasa Yonebayashi", year: 2010, pic: './images/arrietty.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/the-secret-world-of-arrietty?product_id=6656',
					description: "In a secret world hidden beneath the floorboards, little people called Borrowers live out of sight of humans. But when brave and tiny Arrietty is out gathering supplies, she is discovered by Shawn, a human boy, and they begin to form a friendship that blossoms into an extraordinary adventure."},
				{ name: "Pom Poko", index: 6, genre: "Comedy", director: "Isao Takahata", year: 1994, pic: './images/pom-poko.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/pom-poko?product_id=6666',
					description: "The tanuki (raccoon dogs) of Tama Hills find their fun-loving community under attack when their quiet woodlands are threatened by encroaching developers looking to create still more houses and shopping malls. Desperate to survive, the tanuki band together and learn the ancient art of transformation, shape-shifting into a comical variety of humans and spirits as they undertake a last-ditch plan to scare away the humans and save their home, in this deeply affecting, funny and heartfelt look at what it means to live in the modern world."},
				{ name: "Only Yesterday", index: 7, genre: "Romance", director: "Isao Takahata", year: 1991, pic: './images/only-yesterday.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/only-yesterday?product_id=6713',
					description: "Having lived her whole life in the city, 27-year-old Taeko decides to visit her relatives in the countryside. As she travels, memories of her youth resurface, and after meeting young farmer Toshio, she wonders if she's been true to the dreams of her childhood self."},
				{ name: "Ocean Waves", index: 8, genre: "Romance", director: "Tomomi Mochizuki", year: 1993, pic: './images/ocean-waves.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/ocean-waves?product_id=6758',
					description: "Taku and his best friend Yutaka are headed back to school for what looks like another uneventful year. But they soon find their friendship tested by the arrival of Rikako, a beautiful new transfer student from Tokyo whose attitude shifts wildly from flirty and flippant to melancholic. When Taku joins Rikako on a trip to Tokyo, the school erupts with rumors, and the three friends are forced to come to terms with their changing relationships."},
				{ name: "Nausicaa Of The Valley Of The Wind", index: 9, genre: "Fantasy", director: "Hayao Miyazaki", year: 1984, pic: './images/nausicaa.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/nausicaa-of-the-valley-of-the-wind?product_id=6654',
					description: "A thousand years after the Seven Days of Fire destroyed civilization, warring human factions survive in a world devastated by atmospheric poisons and swarming with gigantic insects. The peaceful Valley of the Wind is nestled on the edge of the Toxic Forest and led by the courageous Princess Nausicaä, whose love of all living things leads her into terrible danger, as she fights to restore balance between humans and nature."},
				{ name: "My Neighbors The Yamadas", index: 10, genre: "Comedy", director: "Isao Takahata", year: 1999, pic: './images/yamadas.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/my-neighbors-the-yamadas?product_id=6664',
					description: "Join the hilarious adventures of the quirky Yamada family in this wonderfully offbeat celebration of the little and sometimes bigger victories of life. Presented in a series of brilliant comic vignettes, Takashi Yamada and his wacky wife Matsuko navigate their way through the ups and downs of work, marriage, and family life with a sharp-tongued grandmother, a teenage son who wishes he had cooler parents, and a young daughter with an unusually loud voice."},
				{ name: "From Up On Poppy Hill", index: 11, genre: "Drama", director: "Goro Miyazaki", year: 2011, pic: './images/poppy-hill.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/from-up-on-poppy-hill?product_id=6709',
					description: "Yokohama, 1963. Japan is picking itself up from the devastation of World War II and preparing to host the Olympics. Against this backdrop of hope and change, a friendship begins to blossom between high school students Umi (Sarah Bolger) and Shun (Anton Yelchin). But a buried secret from their past emerges to cast a shadow on the future and pull them apart."},
				{ name: "Spirited Away", index: 12, genre: "Fantasy", director: "Hayao Miyazaki", year: 2001, pic: './images/spirited-away.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/spirited-away-collector-s-edition?product_id=7231',
					description: "Chihiro's family is moving to a new house, but when they stop on the way to explore an abandoned village, her parents undergo a mysterious transformation and Chihiro is whisked into a world of fantastic spirits ruled over by the sorceress Yubaba. Put to work in a magical bathhouse for spirits and demons, Chihiro must use all her wits to survive in this strange new place, find a way to free her parents and return to the normal world. Overflowing with imaginative creatures and thrilling storytelling, Spirited Away became a worldwide smash hit, and is one of the most critically-acclaimed films of all time."},
				{ name: "Princess Mononoke", index: 13, genre: "Fantasy", director: "Hayao Miyazaki", year: 1997, pic: './images/princess-mononoke.jpg', favorite: './images/stargrey.png', storePage:'https://ghiblicollection.com/product/princess-mononoke-collector-s-edition?product_id=7056',
					description: "Inflicted with a deadly curse, the young warrior Ashitaka heads west in search of a cure. There, he stumbles into a bitter conflict between Lady Eboshi, the proud people of Iron Town, and the enigmatic Princess Mononoke, a young girl raised by wolves, who will stop at nothing to prevent the humans from destroying her home and the forest spirits and animal gods who live there."},
				{ name: "My Neighbor Totoro", index: 14, genre: "Fantasy", director: "Hayao Miyazaki", year: 1988, pic: './images/totoro.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/my-neighbor-totoro-30th-anniversary-edition?product_id=6931',
					description: "When Satsuki and her sister Mei move with their father to a new home in the countryside, they find country life is not as simple as it seems. They soon discover that the house and nearby woods are full of strange and delightful creatures, including a gigantic but gentle forest spirit called Totoro, who can only be seen by children. Totoro and his friends introduce the girls to a series of adventures, including a ride aboard the extraordinary Cat Bus, in this all-ages animated masterpiece featuring the voices of Tim Daly, Lea Salonga, and real-life sisters Dakota and Elle Fanning, in early roles."},
				{ name: "Kiki's Delivery Service", index: 15, genre: "Drama", director: "Hayao Miyazaki", year: 1989, pic: './images/kiki.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/kiki-s-delivery-service?product_id=6648',
					description: "It is a tradition for all young witches to leave their families on the night of a full moon and fly off into the wide world to learn their craft. When that night comes for Kiki, she embarks on her new journey with her sarcastic black cat, Jiji, landing the next morning in a seaside village, where her unique skills make her an instant sensation. Don't miss this delightfully imaginative and timeless story of a young girl finding her way in the world, featuring the voices of Kirsten Dunst, Janeane Garofalo, Phil Hartman, and Debbie Reynolds."},
				{ name: "Grave of the Fireflies", index: 16, genre: "War", director: "Isao Takahata", year: 1988, pic: './images/fireflies.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/grave-of-the-fireflies?product_id=6711',
					description: "As the Empire of the Sun crumbles upon itself and a rain of firebombs falls upon Japan, the final death march of a nation is echoed in millions of smaller tragedies. This is the story of Seita and his younger sister Setsuko, two children born at the wrong time, in the wrong place, and now cast adrift in a world that lacks not the care to shelter them, but simply the resources. Forced to fend for themselves in the aftermath of fires that swept entire cities from the face of the earth, their doomed struggle is both a tribute to the human spirit and the stuff of nightmares. Beautiful, yet at times brutal and horrifying."},
				{ name: "Ponyo", genre: "Drama", index: 17, director: "Hayao Miyazaki", year: 2008, pic: './images/ponyo.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/ponyo?product_id=6646',
					description: "When Sosuke, a young boy who lives on a clifftop overlooking the sea, rescues a stranded goldfish named Ponyo, he discovers more than he bargained for. Ponyo is a curious, energetic young creature who yearns to be human, but even as she causes chaos around the house, her father, a powerful sorcerer, schemes to return Ponyo to the sea."},
				{ name: "Howl's Moving Castle", index: 18, genre: "Fantasy", director: "Hayao Miyazaki", year: 2004, pic: './images/howl.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/howl-s-moving-castle?product_id=6640',
					description: "Sophie, a quiet girl working in a hat shop, finds her life thrown into turmoil when she is literally swept off her feet by a handsome but mysterious wizard named Howl. The vain and vengeful Witch of the Waste, jealous of their friendship, puts a curse on Sophie and turns her into a 90-year-old woman. On a quest to break the spell, Sophie climbs aboard Howl's magnificent moving castle and into a new life of wonder and adventure. But as the true power of Howl's wizardry is revealed, Sophie finds herself fighting to protect them both from a dangerous war of sorcery that threatens their world."},
				{ name: "Porco Rosso", index: 19, genre: "Fantasy", director: "Hayao Miyazaki", year: 1992, pic: './images/porco.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/porco-rosso?product_id=6658',
					description: "\"Porco Rosso\" is a world-weary flying ace-turned-bounty-hunter, whose face has been transformed into that of a pig by a mysterious spell. When he infuriates a band of sky pirates with his heroics, the pirates hire Curtis, a hotshot American rival, to get rid of him. But with the help of the teenage girl Fio, an aspiring airplane designer, and a sultry lounge singer named Gina, Porco takes to the skies for what may be his final high-flying showdown."},
				{ name: "Castle in the Sky", index: 20, genre: "Action", director: "Hayao Miyazaki", year: 1986, pic: './images/castle.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/castle-in-the-sky?product_id=6652',
					description: "This high-flying adventure begins when Pazu, an engineer's apprentice, spies a young girl, Sheeta, floating down from the sky, held aloft by a glowing pendant. Both Sheeta and Pazu are searching for the legendary floating castle, Laputa, and they vow to travel there together to unravel the mystery of the luminous crystal. But their quest won't be easy, as soon they are being pursued by greedy air pirates, the military, and secret government agents, who all seek the power Sheeta alone can control."},
				{ name: "The Cat Returns", index: 21, genre: "Drama", director: "Hiroyuki Morita", year: 2002, pic: './images/cat.jpg', favorite: './images/stargrey.png', storePage: 'https://ghiblicollection.com/product/the-cat-returns?product_id=6662',
					description: "Haru is walking home after a dreary day of school when she spies a cat with a small gift box in its mouth crossing a busy street, and she jumps in front of traffic to save the cat from an oncoming truck. To her amazement, the cat gets up on its hind legs, brushes itself off , and thanks her very politely. But things take an even stranger turn when later that night, the King of Cats shows up at her doorstep in a feline motorcade. He showers Haru with gifts, and decrees that she shall marry the Prince and come live in the Kingdom of Cats!"}
			]
		};
	}

	loadMoviePage = (movieIndex) => {
		this.changePageNumber(2);
		this.setState({currentMovie: movieIndex});
	};

	loadAboutPage = () => {
		this.changePageNumber(1);
	}

	changePageNumber = (pageNumber) => {
		this.setState({page: pageNumber});
	};

	loadLoginPage = () => {
		//to be filled out
	}

	render() {		
		let mainPage =
			<div className="App">
				<Title changePageNumber={this.changePageNumber} loadAboutPage={this.loadAboutPage} loadLoginPage={this.loadLoginPage}/>
				<Carousel pics={this.state.pics} changePageNumber={this.changePageNumber}/>


				<FilteredList parentCallback={this.loadMoviePage} movieList={this.state.movieList}/>

				<Ending totoro={this.state.totoro} speedUp={this.state.speedUp}/>
			</div>;

		let aboutPage =
			<div className="App">
				<Title changePageNumber={this.changePageNumber} loadAboutPage={this.loadAboutPage} loadLoginPage={this.loadLoginPage}/>
				<Divider/>
				<AboutPage about/>
			</div>;

		let moviePage =
			<div className="App">
				<Title changePageNumber={this.changePageNumber} loadAboutPage={this.loadAboutPage} loadLoginPage={this.loadLoginPage}/>
				<Divider/>
				<MoviePage movie={this.state.movieList[this.state.currentMovie]}/>
			</div>;

		let curPage;
		switch(this.state.page) {
			case 0:
				curPage = mainPage;
				break;
			case 1:
				curPage = aboutPage;
				break;
			case 2:
				curPage = moviePage;
				break;
			default:
				curPage = mainPage;
				break;
		}


		return (
		curPage

		);
  }
}

export default App;
