import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

import logo from "./assets/cluny-house-consulting-logo.svg";

const Navigation = function ({ routes }) {
	return (
		<header className="fb-col-wrapper nav-wrapper">
			<nav className="navigation">
				<Link id="home-link" className="nav-link" to="/">
					<img className="nav-icon" src={logo} alt="" />
					Cluny House Consulting
				</Link>
				<ul className="nav-links">
					{routes.map(({ path, label, icon }) => (
						<li key={path}>
							<NavLink className="nav-link" to={path}>
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

Navigation.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Navigation;
