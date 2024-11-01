import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = function ({ routes }) {
	return (
		<header className="fb-col-wrapper">
			<nav>
				{routes.map(({ path, label }) => (
					<Link key={path} to={path}>
						{label}
					</Link>
				))}
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
