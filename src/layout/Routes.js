import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NotFound from '../components/errors/NotFound'
import Home from '../components/Home'
import Game from '../components/Game'
import Lists from '../components/lists/Lists'
import List from '../components/lists/List'
import ListEdit from '../components/lists/ListEdit'
import Register from '../components/account/Register'
import Login from '../components/account/Login'
import Logout from '../components/account/Logout'
import Flash from './Flash'

import AuthRoute from './AuthRoute'

const Routes = ({ children }) => {
	return (
		<Router>
			{children}
			<div className="p-1 mb-5">
				<Flash />
				<Switch>
					<Route path="/list-edit">
						<ListEdit />
					</Route>
					<AuthRoute
						forLoggedIn={false}
						path="/register"
						component={Register}
					/>
					<AuthRoute forLoggedIn={false} path="/login" component={Login} />
					<AuthRoute forLoggedIn={true} path="/logout" component={Logout} />
					<Route path="/game">
						<Game />
					</Route>
					<Route path="/list">
						<List />
					</Route>
					<Route path="/lists">
						<Lists />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/*">
						<NotFound />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default Routes
