import React, { useEffect, createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
	user: null
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	useEffect(() => {
		const checkForActiveSession = async () => {
			const response = await axios('user/session')
			userLogin(response.data)
		}
		checkForActiveSession()
	}, [])

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

	return (
		<GlobalContext.Provider
			value={{
				user: state.user,
				userLogin,
				userLogout
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
