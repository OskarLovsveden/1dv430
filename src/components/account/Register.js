// Inpiration for validation of form - https://www.telerik.com/blogs/up-and-running-with-react-form-validation

import React, { useState, useContext } from 'react'
import { FlashContext } from '../../context/FlashState'
import axios from 'axios'

const Register = () => {
	const { showFlash } = useContext(FlashContext)
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)
	const [errors, setErrors] = useState({ password: '', confirm: '' })

	const validateForm = () => {
		let valid = true
		Object.values(errors).forEach(error => {
			if (error.length) valid = false
		})
		if (username === null || !username.length) {
			valid = false
		}
		return valid
	}

	const handleChange = event => {
		event.preventDefault()
		const { name, value } = event.target

		switch (name) {
			case 'username':
				setUsername(value)
				break
			case 'password':
				setPassword(value)
				setErrors({
					...errors,
					password:
						value.length < 10 ? 'Password must be 10 characters long!' : ''
				})
				break
			case 'confirm':
				setErrors({
					...errors,
					confirm: value !== password ? 'Passwords must match!' : ''
				})
				break
			default:
				break
		}
	}

	const registerUser = async event => {
		event.preventDefault()
		if (validateForm()) {
			const response = await axios({
				method: 'post',
				url: 'user/register',
				data: {
					username: username,
					password: password
				}
			})
			showFlash(response.data)
		} else {
			console.error('Invalid Form')
		}
	}

	return (
		<>
			<div className="d-flex justify-content-center pb-5">
				<form className="text-center p-5">
					<p className="h4 mb-4">Register</p>
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
						aria-describedby="passwordHelpBlock"
						onChange={handleChange}
					></input>
					{errors.password && (
						<small
							id="passwordHelpBlock"
							className="form-text text-muted float-left mb-4"
						>
							{errors.password}
						</small>
					)}
					<input
						type="password"
						name="confirm"
						className="form-control mb-2"
						placeholder="Confirm Password"
						required="required"
						aria-describedby="confirmHelpBlock"
						onChange={handleChange}
					></input>
					{errors.confirm && (
						<small
							id="confirmHelpBlock"
							className="form-text text-muted float-left mb-4"
						>
							{errors.confirm}
						</small>
					)}
					<button
						className="btn btn-outline-default btn-block my-4"
						onClick={registerUser}
					>
						Register
					</button>
					<p>
						Already registered?{' '}
						<a className="text-default" href="/login">
							Login
						</a>
					</p>
				</form>
			</div>
		</>
	)
}

export default Register
