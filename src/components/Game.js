import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { GameContext } from '../context/GameState'

const Game = () => {
	const { game } = useContext(GameContext)
	console.log(game)

	if (!game) {
		return <Redirect to="/"></Redirect>
	}

	return (
		<div>
			{game.name}
			<button>Add To List</button>
		</div>
	)
}

export default Game
