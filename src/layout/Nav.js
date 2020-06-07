import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { NavLink } from 'react-router-dom'

const activeLink = { backgroundColor: 'rgba(255, 255, 255, 0.2)' }

const Nav = () => {
	const { user } = useContext(GlobalContext)
	return (
		<nav className="navbar navbar-expand-lg navbar-dark default-color-dark">
			<NavLink className="navbar-brand" to="/">
				Home
			</NavLink>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#app-navbar"
				aria-controls="app-navbar"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="app-navbar">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink activeStyle={activeLink} className="nav-link" to="/search">
							Search
						</NavLink>
					</li>
					{user && (
						<li className="nav-item">
							<NavLink
								activeStyle={activeLink}
								className="nav-link"
								to="/lists"
							>
								Lists
							</NavLink>
						</li>
					)}
					{!user ? (
						<li className="nav-item">
							<NavLink
								activeStyle={activeLink}
								className="nav-link"
								to="/login"
							>
								Login
							</NavLink>
						</li>
					) : (
						<li className="nav-item">
							<NavLink
								activeStyle={activeLink}
								className="nav-link"
								to="/logout"
							>
								Logout
							</NavLink>
						</li>
					)}
				</ul>
			</div>
		</nav>
	)
}

export default Nav
