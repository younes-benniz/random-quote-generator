import PropTypes from "prop-types";
import StartQuote from "../../assets/quote-start.svg";
import EndQuote from "../../assets/quote-end.svg";
import Twitter from "../../assets/twitter.svg";
import "./style.scss";

const QuoteBox = ({ quote, author, handleClick }) => {
	return (
		<div className="quote-box d-flex flex-column align-items-around mx-auto">
			<div className="quote-content d-flex flex-column align-items-center" id="quote-box">
				<img src={StartQuote} className="icon quote-start" />
				<p className="quote-text text-center" id="text">
					{quote}
				</p>
				<img src={EndQuote} className="icon quote-end" />
				<h5 className="author" id="author">
					{author}
				</h5>
			</div>
			<div className="d-flex justify-content-between align-items-center">
				<a
					href={encodeURI(
						`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote}\n--${author}\n`,
					)}
					target="_top"
					className="tweet-quote d-flex align-items-center"
					id="tweet-quote">
					<img src={Twitter} className="icon" />
					Tweet it!
				</a>
				<button
					id="new-quote"
					type="button"
					className="btn btn-success btn-lg"
					onClick={handleClick}>
					See another!
				</button>
			</div>
		</div>
	);
};

QuoteBox.propTypes = {
	quote: PropTypes.string,
	author: PropTypes.string,
	handleClick: PropTypes.func,
};

export default QuoteBox;
