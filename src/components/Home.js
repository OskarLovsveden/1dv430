import React, { useState } from 'react'
import axios from 'axios'

// Components
import SearchBar from '../components/SearchBar'

const Home = () => {
	const [searchData, setSearchData] = useState([])

	const receiveData = data => {
		setSearchData(data)
		console.log(data)
	}

	const newList = async () => {
		const response = await axios.post('mongo/lists/new')
		console.log(response)
	}

	const saveGame = async event => {
		const testdata = searchData.find(
			game => game.id === parseInt(event.target.id, 10)
		)
		console.log(testdata)
	}

	return (
		<div>
			<SearchBar
				passUp={receiveData}
				placeholder="Search for a game..."
			></SearchBar>
			<button onClick={newList} className="btn btn-sm">
				Add new list
			</button>
			<ul>
				{searchData
					? searchData.map(game => (
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
