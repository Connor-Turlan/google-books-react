import { useEffect, useState } from "react";
import style from "./App.module.scss";
import SearchBar from "./components/SearchBar/";
import Results from "./containers/Results/";
import { searchAPI } from "./scripts/api";

function App() {
	const [isResultActive, setResultActive] = useState(false);
	const [isSearchWaiting, setSearctWaiting] = useState(false);
	const [query, setQuery] = useState("");
	const [books, setBooks] = useState([]);

	const setResults = (books) => {
		console.log("new search");
		setBooks(books);
	};

	/* const addResults = (newBooks) => {
		console.log("append search");
		setBooks([...books, ...newBooks]);
	}; */

	useEffect(() => {
		searchAPI(query, setResults);
		setResultActive(query.length > 0);
		setSearctWaiting(true && query.length > 0);
	}, [query]);

	useEffect(() => {
		setResultActive(books.length > 0);
		setSearctWaiting(false);
	}, [books]);

	return (
		<div className={style.App}>
			<SearchBar
				active={isResultActive}
				setQuery={setQuery}
				waiting={isSearchWaiting}
			/>
			{isResultActive && <Results cards={books} />}
		</div>
	);
}

export default App;
