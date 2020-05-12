import React, { useContext } from 'react'
import { GameContext } from '../context/GameState'

const Game = () => {
	const { game } = useContext(GameContext)
	return <div>{game.name}</div>
}

export default Game
