import React, { useState } from 'react'
import axios from 'axios'

// Components
import SearchBar from '../components/SearchBar'

const Home = () => {
	const [gameData, setGameData] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	if (gameData.length === 0) console.log('is empty')
	if (gameData.length !== 0) console.log('got data')

	const receiveData = data => {
		console.log(data)
		setGameData(data)
	}

	const checkIfLoading = loading => {
		setIsLoading(loading)
	}

	const newList = async () => {
		const response = await axios.post('mongo/lists/new')
		console.log(response)
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
			<button onClick={newList} className="btn btn-sm">
				Add new list
			</button>
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
