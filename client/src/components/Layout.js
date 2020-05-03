import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import TestIGDB from './TestIGDB'
import TestMongoDB from './TestMongoDB'

export const Layout = () => {
	return (
		<>
			<Router>
				<div>
					<Nav />
					{/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/testmongo" component={TestMongoDB} />
						<Route path="/testigdb" component={TestIGDB} />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</Router>
			<Footer />
		</>
	)
}

export default Layout
