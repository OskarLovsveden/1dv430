import React from 'react'
import { NavLink } from 'react-router-dom'

const activeLink = { backgroundColor: 'rgba(255, 255, 255, 0.2)' }

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark primary-color">
			<NavLink className="navbar-brand" to="/">
				Navbar
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
						<NavLink exact activeStyle={activeLink} className="nav-link" to="/">
							Home
						</NavLink>
					</li>
				</ul>

				<form className="form-inline">
					<div className="md-form my-0">
						<input
							className="form-control mr-sm-2"
							type="text"
							placeholder="Search"
							aria-label="Search"
						></input>
					</div>
				</form>
			</div>
		</nav>
	)
}

export default Nav
