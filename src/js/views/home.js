import React from "react";
import { Planet } from "../component/planet";
import { Character } from "../component/characters";
import { NavBar } from "../component/navbar";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			characters: ["yoda", "darth-vader"],
			planets: ["death star", "tatooine"]
		};
	}

	componentDidMount() {
		fetch("https://swapi.dev/api/people/")
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => this.setState({ characters: data.results }))
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
		fetch("https://swapi.dev/api/planets/")
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json();
			})
			.then(data => this.setState({ planets: data.results }))
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}

	render() {
		return (
			<div className="wrapper">
				<div className="container-fluid col-10 d-flex mt-5 scrollbar">
					{this.state.characters.map((character, index) => (
						<Character key={index} id={index} char={character} />
					))}
				</div>
				<div className="container-fluid col-10 d-flex mt-5 scrollbar mb-5">
					{this.state.planets.map((planet, index) => (
						<Planet key={index} id={index} plan={planet} />
					))}
				</div>
			</div>
		);
	}
}

// Components : home.js,  details,  character card,  planet card

// run 2 fetches on HOME.JS : planets,  characters

// create 2 arrays in our state :  planets,  characters

// make home.js a class component

// we need 2 MAP() : planets, characters

// GOOOD LUCK!!
