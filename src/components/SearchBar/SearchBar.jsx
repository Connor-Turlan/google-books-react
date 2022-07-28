import style from "./SearchBar.module.scss";

const SearchBar = ({ setQuery }) => {
	let query = "";

	const updateLocalQuery = (event) => {
		query = event.target.value;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setQuery(query);
	};

	return (
		<form className={style.Search}>
			<h1 className={style.Search__title}>Google Books - Search</h1>
			<input
				className={style.Search__query}
				type="text"
				name="book-title"
				id="search-query"
				onChange={updateLocalQuery}
			/>
			<input
				className={style.Search__submit}
				type="submit"
				name="search"
				id="search-button"
				value="Search"
				onClick={handleSubmit}
			/>
			<ul className={style.Search__help}>
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
