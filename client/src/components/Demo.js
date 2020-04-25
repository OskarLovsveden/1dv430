import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// Components
import Nav from '../components/Nav'
import TestIGDB from './TestIGDB'

export const Demo = () => {
	return (
		<>
			<Router>
				<div>
					<Nav></Nav>

					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/users">
							<Users />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
			<footer className="page-footer fixed-bottom font-small blue pt-4">
				<div className="container-fluid text-center text-md-left">
					<div className="row">
						<div className="col-md-6 mt-md-0 mt-3">
							<h5 className="text-uppercase">Footer Content</h5>
							<p>
								Here you can use rows and columns to organize your footer
								content.
							</p>
						</div>

						<hr className="clearfix w-100 d-md-none pb-3"></hr>
						<div className="col-md-3 mb-md-0 mb-3">
							<h5 className="text-uppercase">Links</h5>

							<ul className="list-unstyled">
								<li>
									<a href="#!">Link 1</a>
								</li>
								<li>
									<a href="#!">Link 2</a>
								</li>
								<li>
									<a href="#!">Link 3</a>
								</li>
								<li>
									<a href="#!">Link 4</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 mb-md-0 mb-3">
							<h5 className="text-uppercase">Links</h5>

							<ul className="list-unstyled">
								<li>
									<a href="#!">Link 1</a>
								</li>
								<li>
									<a href="#!">Link 2</a>
								</li>
								<li>
									<a href="#!">Link 3</a>
								</li>
								<li>
									<a href="#!">Link 4</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright text-center py-3">
					© 2020 Copyright:
					<a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
				</div>
			</footer>
		</>
	)
}

function Home() {
	return <h2>Home</h2>
}

function About() {
	return <h2>About</h2>
}

function Users() {
	return <h2>Users</h2>
}

export default Demo
