import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
export class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: {},
			redirect: false
		};
	}

	componentDidMount = () => {
		//when user reloads page we will lose our object that was passed in
		// we will redirect user to home screen if user reloads //

		//if we have a current object.. either characters or planets
		if (this.props.location.state) {
			const item = this.props.location.state;
			//determines which object we are going to use
			//by checking if the current object contains the property 'character'-
			//-which is only found in characters obj
			this.setState({ result: "character" in item ? item.character : item.plan, redirect: false });
		} else {
			//empties state object and redirects to home
			this.setState({ result: {}, redirect: true });
		}
	};

	// line 55 we run a check and see if current obj has character property, if true we know the user
	//clicked on a character and we must now check for character properties
	//else--- we know the user clicked on a planet and we are now checking for planet properties

	//line 108 we redirect to home if user refreshed
	render() {
		return (
			<>
				{this.state.redirect == false ? (
					<div className="container">
						<div className="row">
							<div className="col-6">
								<img src="https://loremflickr.com/320/240/starwars" className="w-100" />
							</div>
							<div className="col-6">
								<div className="text-center m-3">
									<h2>{this.state.result.name}</h2>
									<p>Sed ut perspiciatis</p>
								</div>
							</div>
						</div>
						<div className="row ml-1 mr-1 background border-top border-danger">
							<div className="col-12 d-flex justify-content-between text-danger text-center">
								<div className="appearances p-2 m-3">
									<h6>Name</h6>
									<p>{this.state.result.name}</p>
								</div>

								{"birth_year" in this.state.result ? (
									<>
										<div className="affiliations m-3 p-2">
											<h6>Birth Year</h6>
											<p className="text-center">{this.state.result.birth_year}</p>
										</div>
										<div className="locations p-2 m-3">
											<h6>Gender</h6>
											<p>{this.state.result.gender}</p>
										</div>
										<div className="gender p-2 m-3">
											<h6>Height</h6>
											<p>{this.state.result.height}</p>
										</div>
										<div className="dimensions p-2 m-3">
											<h6>Skin Color</h6>
											<p className="text-center">{this.state.result.skin_color}</p>
										</div>
										<div className="species p-2 m-3">
											<h6>Eye Color</h6>
											<p>{this.state.result.eye_color}</p>
										</div>
									</>
								) : (
									<>
										<div className="affiliations m-3 p-2">
											<h6>Birth Year</h6>
											<p className="text-center">{this.state.result.terrain}</p>
										</div>
										<div className="locations p-2 m-3">
											<h6>Gender</h6>
											<p>{this.state.result.population}</p>
										</div>
										<div className="gender p-2 m-3">
											<h6>Height</h6>
											<p>{this.state.result.gravity}</p>
										</div>
										<div className="dimensions p-2 m-3">
											<h6>Skin Color</h6>
											<p className="text-center">{this.state.result.climate}</p>
										</div>
										<div className="species p-2 m-3">
											<h6>Eye Color</h6>
											<p>{this.state.result.orbital_period}</p>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				) : (
					<Redirect to="/" />
				)}
			</>
		);
	}
}
Details.propTypes = {
	match: PropTypes.object,
	location: PropTypes.object,
	name: PropTypes.string,
	results: PropTypes.object
};
