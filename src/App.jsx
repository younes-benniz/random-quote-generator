import { useState, useEffect } from "react";
import Title from "./components/Title";
import QuoteBox from "./components/QuoteBox";
import "./App.scss";

function App() {
	const [quotes, setQuotes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentQuote, setCurrentQuote] = useState({ quote: "", author: "" });
	const [randomIndex, setRandomIndex] = useState([]);

	const getRandomIndex = (arr) => {
		return Math.floor(Math.random() * arr.length);
	};

	const setNewQuote = () => {
		setLoading(true);
		if (randomIndex.length === quotes.length) {
			setRandomIndex([]);
		}
		let newRandomIndex = getRandomIndex(quotes);
		while (randomIndex.includes(quotes[newRandomIndex])) {
			newRandomIndex = getRandomIndex(quotes);
		}
		setCurrentQuote(quotes[newRandomIndex]);
		setRandomIndex((state) => [...state, newRandomIndex]);
		setLoading(false);
	};

	useEffect(() => {
		const fetchQuotes = async () => {
			const response = await fetch(
				"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
			);
			const data = await response.json();
			if (response.ok) {
				setQuotes(data.quotes);
				let random = getRandomIndex(data.quotes);
				setCurrentQuote(data.quotes[random]);
				setRandomIndex((state) => [...state, random]);
				setLoading(false);
			} else {
				console.log("Error: ", data);
			}
		};
		fetchQuotes();
	}, []);

	return (
		<div className="app">
			<Title title="Get inspired from real Quotes !" />
			{loading ? (
				<h2>Loading...</h2>
			) : (
				<QuoteBox
					quote={currentQuote.quote}
					author={currentQuote.author}
					handleClick={setNewQuote}
				/>
			)}
		</div>
	);
}

export default App;
