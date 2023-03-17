import PropTypes from "prop-types";
import "./style.scss";

const Title = ({ title }) => {
	return (
		<div className="title-wrapper mb-2">
			<h1 className="title">{title}</h1>
		</div>
	);
};

Title.propTypes = {
	title: PropTypes.string,
};

Title.defaultProps = {
	title: "Get inspired !!",
};

export default Title;
