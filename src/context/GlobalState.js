import React, { useEffect, createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial State
const initialState = {
	user: null,
	flash: {
		type: '',
		text: ''
	}
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	// Check for active session
	useEffect(() => {
		const checkForActiveSession = async () => {
			const response = await axios('user/session')
			userLogin(response.data)
		}
		checkForActiveSession()
	}, [])

	// Actions
	const userLogin = username => {
		dispatch({
			type: 'USER_LOGIN',
			payload: username
		})
	}
	const userLogout = () => {
		dispatch({
			type: 'USER_LOGOUT',
			payload: null
		})
	}
	const setFlash = flash => {
		dispatch({
			type: 'SET_FLASH',
			payload: flash
		})
	}

	return (
		<GlobalContext.Provider
			value={{
				user: state.user,
				flash: state.flash,
				userLogin,
				userLogout,
				setFlash
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
