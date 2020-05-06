import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'

export const Layout = () => {
	return (
		<>
			<Router>
				<div>
					<Nav />
					{/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</Router>
			<Footer />
		</>
	)
}

export default Layout