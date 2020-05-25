import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import Lists from '../components/Lists'
import NotFound from '../components/errors/NotFound'
import List from '../components/List'
import Game from '../components/Game'
import Register from '../components/account/Register'
import Login from '../components/account/Login'
import Flash from '../components/Flash'
import Logout from '../components/account/Logout'
import ListEdit from '../components/ListEdit'

const Routes = ({ children }) => (
	<Router>
		{children}
		<Flash />
		<div>
			<Switch>
				<Route path="/list-edit/:id">
					<ListEdit />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/logout">
					<Logout />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/game">
					<Game />
				</Route>
				<Route path="/list/:id">
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

export default Routes
