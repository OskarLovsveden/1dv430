import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { FlashContext } from '../../context/FlashState'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
	const { userLogin } = useContext(GlobalContext)
	const { showFlash } = useContext(FlashContext)
	const history = useHistory()

	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)

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
		try {
			const response = await axios({
				method: 'post',
				url: 'user/login',
				data: {
					username: username,
					password: password
				}
			})
			if (response.data.type === 'success') {
				userLogin(username)
				showFlash(response.data)
				history.push('/')
			} else {
				showFlash(response.data)
			}
		} catch (error) {
			console.error(error.message)
		}
	}

	return (
		<>
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
						className="btn btn-outline-default btn-block my-4"
						onClick={loginUser}
					>
						Login
					</button>

					<p>
						Not a member?{' '}
						<a className="text-default" href="/register">
							Register
						</a>
					</p>
				</form>
			</div>
		</>
	)
}

export default Login
