import React, { useState } from 'react'

// Components
import SearchBar from '../components/SearchBar'
import GameCard from './GameCard'

const Home = () => {
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
			{gameData
				? gameData.map(game => <GameCard key={game.id} game={game}></GameCard>)
				: null}
		</div>
	)
}

// Exports
export default Home
