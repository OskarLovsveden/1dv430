import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ forLoggedIn, component: Component, ...rest }) => {
	const { user } = useContext(GlobalContext)
	const auth = forLoggedIn ? user : !user

	return (
		<Route
			{...rest}
			render={props =>
				auth ? (
					<Redirect
						to={{
							pathname: '/',
							state: { from: props.location }
						}}
					/>
				) : (
					<Component {...props} />
				)
			}
		/>
	)
}

export default AuthRoute
