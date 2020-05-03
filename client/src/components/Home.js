import React, { useState } from 'react'

// Components
import SearchBar from '../components/SearchBar'

const Home = () => {
	const [searchData, setSearchData] = useState(null)

	const receiveData = data => {
		console.log(data)
		setSearchData(data)
	}

	return (
		<div>
			<SearchBar
				passUp={receiveData}
				placeholder="Search for a game..."
			></SearchBar>
			<ul>
				{searchData
					? searchData.map(game => <li key={game.id}>{game.name}</li>)
					: null}
			</ul>
		</div>
	)
}

// Exports
export default Home
