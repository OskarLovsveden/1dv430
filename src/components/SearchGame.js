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
		<>
			<SearchBar
				value={handleValue}
				loading={handleLoading}
				placeholder="Search for a game..."
			></SearchBar>
			{isLoading && (
				<div className="text-center p-5">
					<div
						className="spinner-border text-default text-center"
						role="status"
					>
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			)}
			<SearchResult gameData={gameData}></SearchResult>
		</>
	)
}

export default SearchGame
