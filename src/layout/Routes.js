import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NotFound from '../components/errors/NotFound'
import Home from '../components/Home'
import Game from '../components/Game'
import Lists from '../components/Lists'
import List from '../components/List'
import ListEdit from '../components/ListEdit'
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
					<AuthRoute forLoggedIn={true} path="/register" component={Register} />
					<AuthRoute forLoggedIn={true} path="/login" component={Login} />
					<AuthRoute forLoggedIn={false} path="/logout" component={Logout} />
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
