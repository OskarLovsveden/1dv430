import React, { useState, useEffect } from 'react'

// Components
import SearchBar from '../components/SearchBar'

const Home = () => {
	const [query, setQuery] = useState(null)

	const submitToQuery = searchInput => {
		console.log('submitToQuery', searchInput)
		setQuery(searchInput)
	}

	return (
		<div>
			<SearchBar placeholder="Search for a game..."></SearchBar>
			{/* <SearchBar
				submit={submitToQuery}
				placeholder="Search for a game..."
			></SearchBar> */}
			<h1>{query}</h1>
		</div>
	)
}

// Exports
export default Home
