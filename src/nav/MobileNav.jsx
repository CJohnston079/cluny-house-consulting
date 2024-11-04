import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./MobileNav.css";
import "./DesktopNav.css";

import logo from "../assets/cluny-house-consulting-logo.svg";
import hamburger from "../assets/hamburger.svg";
import close from "../assets/close.svg";

const MobileNav = function ({ routes }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleHamburger = () => {
		setIsMenuOpen(prevState => !prevState);
	};

	return (
		<header className="fb-col-wrapper nav-wrapper">
			<nav id="mobile-nav" className="navigation" role="MobileNav" aria-label="Main navigation">
				<header className="nav-header">
					<Link id="home-link" className="nav-link" to="/">
						<img className="nav-icon" src={logo} alt="Cluny House Consulting logo" />
						Cluny House Consulting
					</Link>
					<button
						className="menu-toggle nav-link"
						aria-label="Open navigation menu"
						onClick={handleHamburger}
					>
						<img className="nav-icon" src={isMenuOpen ? close : hamburger} alt="Menu icon" />
					</button>
				</header>
				<ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
					{routes.map(({ path, label, icon }) => (
						<li key={path}>
							<NavLink className="nav-link" to={path} aria-label={`Navigate to ${label}`}>
								<img className="nav-icon" src={icon} alt="" />
								{label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

MobileNav.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default MobileNav;
