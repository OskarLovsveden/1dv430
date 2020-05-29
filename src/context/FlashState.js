import React, { createContext, useReducer } from 'react'
import FlashReducer from './FlashReducer'

// Initial State
const initialState = {
	flash: {
		type: '',
		text: '',
		visible: false
	}
}

// Create context
export const FlashContext = createContext(initialState)

// Provider component
export const FlashProvider = ({ children }) => {
	const [state, dispatch] = useReducer(FlashReducer, initialState)

	// Actions
	const showFlash = flash => {
		dispatch({
			type: 'SHOW_FLASH',
			payload: flash
		})
	}
	const hideFlash = () => {
		dispatch({
			type: 'HIDE_FLASH'
		})
	}

	return (
		<FlashContext.Provider
			value={{
				flash: state.flash,
				showFlash,
				hideFlash
			}}
		>
			{children}
		</FlashContext.Provider>
	)
}
