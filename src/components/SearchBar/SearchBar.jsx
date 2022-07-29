import style from "./SearchBar.module.scss";

const SearchBar = ({ active, setQuery, waiting }) => {
	let query = "";

	const updateLocalQuery = (event) => {
		query = event.target.value;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setQuery(query);
	};

	const searchStyle = active
		? [style.Search, style.Search_top]
		: [style.Search];

	const searchButtonStyle = waiting
		? [style.Search__submit, style.Search__submit_wait]
		: [style.Search__submit];

	const searchHelpStyle = !active
		? [style.Search__help]
		: [style.Search__help, style.Search__help_hidden];

	return (
		<form className={searchStyle.join(" ")}>
			<h1 className={style.Search__title}>Google Books - Search</h1>
			<input
				className={style.Search__query}
				type="text"
				name="book-title"
				id="search-query"
				onChange={updateLocalQuery}
			/>
			<input
				className={searchButtonStyle.join(" ")}
				type="submit"
				name="search"
				id="search-button"
				value={!waiting ? "Search" : "Loading..."}
				onClick={handleSubmit}
			/>
			<ul className={searchHelpStyle.join(" ")}>
				<li>
					Enter a query including title, author, year, or any search
					query that relates to the books you wish to see.
				</li>
				<li>
					Specify a query term by adding the prefix "[term]:", e.g.
					"title:Harry Potter"
				</li>
				<li>Click on any card to display more information.</li>
			</ul>
		</form>
	);
};

export default SearchBar;
