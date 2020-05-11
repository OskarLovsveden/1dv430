import React, { useState } from 'react'

// Components
import SearchBar from '../components/SearchBar'
import GameCard from './GameCard'

const Home = () => {
	const [gameData, setGameData] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const receiveData = data => {
		console.log(data)
		setGameData(data)
	}

	const checkIfLoading = loading => {
		setIsLoading(loading)
	}

	return (
		<div>
			<SearchBar
				data={receiveData}
				loading={checkIfLoading}
				placeholder="Search for a game..."
			></SearchBar>
			{isLoading ? 'Loading' : null}
			{gameData
				? gameData.map(game => (
						<GameCard
							key={game.id}
							gameID={game.id}
							gameName={game.name}
						></GameCard>
				  ))
				: null}
		</div>
	)
}

// Exports
export default Home
