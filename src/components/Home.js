import React, { useState } from 'react'

// Components
import SearchBar from '../components/SearchBar'

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

	const saveGame = async event => {
		const testdata = gameData.find(
			game => game.id === parseInt(event.target.id, 10)
		)
		console.log(testdata)
	}

	return (
		<div>
			<SearchBar
				data={receiveData}
				loading={checkIfLoading}
				placeholder="Search for a game..."
			></SearchBar>
			{isLoading ? 'Loading' : null}
			<ul>
				{gameData
					? gameData.map(game => (
							<li key={game.id}>
								{game.name}
								<button id={game.id} onClick={saveGame} className="btn btn-sm">
									Add to list
								</button>
							</li>
					  ))
					: null}
			</ul>
		</div>
	)
}

// Exports
export default Home
