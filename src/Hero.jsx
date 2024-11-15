import PropTypes from "prop-types";
import "./Hero.css";

const Hero = function ({ heading, description }) {
	return (
		<header className="hero fb-col-wrapper">
			<h1 className="hero__heading">{heading}</h1>
			<p className="hero__description">{description}</p>
		</header>
	);
};

Hero.propTypes = {
	heading: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default Hero;
