import PropTypes from "prop-types";
import "./List.css";

const List = function ({ listHeading, listItems }) {
	return (
		<>
			<h3 className="list__heading">{listHeading}</h3>
			<ul className="list">
				{listItems.map((listItem, i) => (
					<li key={i} className="list__item">
						{listItem}
					</li>
				))}
			</ul>
		</>
	);
};

List.propTypes = {
	listHeading: PropTypes.string,
	listItems: PropTypes.arrayOf(PropTypes.string),
};

export default List;
