import PropTypes from "prop-types";
import "./List.css";

const List = function ({ listItems }) {
	return (
		<ul className="list">
			{listItems.map((listItem, i) => (
				<li key={i} className="list__item">
					{listItem}
				</li>
			))}
		</ul>
	);
};

List.propTypes = {
	listItems: PropTypes.arrayOf(PropTypes.string),
};

export default List;
