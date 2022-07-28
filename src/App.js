import { useEffect, useState } from "react";
import style from "./App.module.scss";
import SearchBar from "./components/SearchBar/";
import Results from "./containers/Results/";
import { searchAPI } from "./scripts/api";

function App() {
	const [isResultActive, setResultActive] = useState(false);
	const [query, setQuery] = useState("");
	const [books, setBooks] = useState([]);

	const updateResults = (books) => {
		setBooks(books);
	};

	useEffect(() => {
		searchAPI(query, updateResults);
		setResultActive(query.length > 0);
	}, [query]);

	useEffect(() => {
		setResultActive(books.length > 0);
	}, [books]);

	return (
		<div className={style.App}>
			<SearchBar setQuery={setQuery} />
			{isResultActive && <Results cards={books} />}
		</div>
	);
}

export default App;
