import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./DesktopNav.scss";

import logo from "../assets/cluny-house-consulting-logo.svg";

const DesktopNav = function ({ routes }) {
	return (
		<header className="u-fb-col-wrapper nav__wrapper">
			<nav className="nav" role="navigation" aria-label="Main Navigation">
				<Link id="home-link" className="nav__link" to="/">
					<img className="nav__icon" src={logo} alt="Cluny House Consulting logo" />
					Cluny House Consulting
				</Link>
				<ul className="nav__links">
					{routes.map(({ path, label, icon }) => (
						<li key={path}>
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav__link nav__link--active" : "nav__link"
								}
								to={path}
								aria-label={`Navigate to ${label}`}
							>
								<img className="nav__icon" src={icon} alt="" />
								{label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

DesktopNav.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default DesktopNav;
