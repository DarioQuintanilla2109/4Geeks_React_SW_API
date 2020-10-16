import React from "react";
import Proptypes from "prop-types";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-dark" id="myNavBar">
			<span className="navbar-brand mb-0 h1 pl-5">
				<i className="fab fa-jedi-order" />
				&nbsp; &nbsp; STAR WARS
				{/* <img src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/cfd241b0-85a3-4363-87b1-51c6732af3fd" /> */}
			</span>
			<span className="nav-item dropdown pr-5">
				<a
					className="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<div className="dropdown-divider" />
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</span>
		</nav>
	);
};
