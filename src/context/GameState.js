import React, { createContext, useReducer } from 'react'
import GameReducer from './GameReducer'

// Initial State
const initialState = {}

// Create context
export const GameContext = createContext(initialState)

// Provider component
export const GameProvider = ({ children }) => {
	const [state, dispatch] = useReducer(GameReducer, initialState)

	// Actions
	const setGame = game => {
		dispatch({
			type: 'SET_GAME',
			payload: game
		})
	}

	return (
		<GameContext.Provider value={{ game: state.game, setGame }}>
			{children}
		</GameContext.Provider>
	)
}
