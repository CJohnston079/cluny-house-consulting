import PropTypes from "prop-types";
import "./ProcessOverview.css";

const ProcessOverview = function ({ heading, steps }) {
	return (
		<div className="process">
			<h2 className="process__heading">{heading}</h2>
			{steps.map((step, i) => (
				<article key={i} className="process__step">
					<h3 className="step__heading">{step.heading}</h3>
					<p className="step__body">{step.body}</p>
				</article>
			))}
		</div>
	);
};

ProcessOverview.propTypes = {
	heading: PropTypes.string,
	steps: PropTypes.arrayOf(
		PropTypes.shape({
			heading: PropTypes.string,
			body: PropTypes.string,
		})
	),
};

ProcessOverview.defaultProps = {
	heading: "How do we do it?",
};

export default ProcessOverview;
