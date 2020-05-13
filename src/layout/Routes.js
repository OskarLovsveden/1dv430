import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from '../components/Nav'
import Home from '../components/Home'
import Lists from '../components/Lists'
import NotFound from '../components/NotFound'
import List from '../components/List'
import Game from '../components/Game'
import Register from '../components/Register'
import Login from '../components/Login'

const Routes = () => (
	<Router>
		<Nav />
		<div>
			<Switch>
				<Route path="/register">
					<Register />
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
