import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = function ({ routes }) {
	return (
		<header className="fb-col-wrapper nav-wrapper">
			<nav className="navigation">
				<ul className="nav-links">
					{routes.map(({ path, label }) => (
						<li key={path}>
							<NavLink className="nav-link" to={path}>
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
		})
	).isRequired,
};

export default Navigation;
