import React, { createContext, useReducer } from 'react'
import FlashReducer from './FlashReducer'

const initialState = {
	flash: {
		type: '',
		text: '',
		visible: false
	}
}

export const FlashContext = createContext(initialState)

export const FlashProvider = ({ children }) => {
	const [state, dispatch] = useReducer(FlashReducer, initialState)

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
