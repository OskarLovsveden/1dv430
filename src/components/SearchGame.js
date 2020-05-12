import React, { useState } from 'react'

// Components
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

const SearchGame = () => {
	const [gameData, setGameData] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const handleValue = value => {
		setGameData(value)
	}

	const handleLoading = loading => {
		setIsLoading(loading)
	}

	return (
		<div>
			<SearchBar
				value={handleValue}
				loading={handleLoading}
				placeholder="Search for a game..."
			></SearchBar>
			{isLoading ? 'Loading' : null}
			<SearchResult gameData={gameData}></SearchResult>
		</div>
	)
}

export default SearchGame
