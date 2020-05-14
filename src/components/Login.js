import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)
	const [flash, setFlash] = useState(null)

	const handleChange = event => {
		event.preventDefault()
		const { name, value } = event.target

		switch (name) {
			case 'username':
				setUsername(value)
				break
			case 'password':
				setPassword(value)
				break
			default:
				break
		}
	}

	const loginUser = async event => {
		event.preventDefault()
		const response = await axios({
			method: 'post',
			url: 'user/login',
			data: {
				username: username,
				password: password
			}
		})
		setFlash(response.data)
	}

	return (
		<>
			{flash && (
				<div className={`alert alert-${flash.type}`} role="alert">
					{flash.text}
				</div>
			)}
			<div className="d-flex justify-content-center pb-5">
				<form className="text-center p-5">
					<p className="h4 mb-4">Login</p>

					<input
						type="text"
						name="username"
						className="form-control mb-4"
						placeholder="Username"
						required="required"
						autoFocus="autofocus"
						onChange={handleChange}
					></input>

					<input
						type="password"
						name="password"
						className="form-control mb-2"
						placeholder="Password"
						required="required"
						onChange={handleChange}
					></input>

					<button
						className="btn btn-primary btn-block my-4"
						onClick={loginUser}
					>
						Login
					</button>

					<p>
						Not a member? <a href="/register">Register</a>
					</p>
				</form>
			</div>
		</>
	)
}

export default Login
