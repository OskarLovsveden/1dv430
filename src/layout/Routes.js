import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from '../components/Nav'
import Home from '../components/Home'
import Lists from '../components/Lists'
import About from '../components/About'
import NotFound from '../components/NotFound'

const Routes = () => (
	<Router>
		<Nav />
		<div>
			<Switch>
				<Route path="/lists">
					<Lists />
				</Route>
				<Route path="/about">
					<About />
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
