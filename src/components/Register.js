import React, { useState } from 'react'

const Register = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirm, setConfirm] = useState('')

	const handleUsername = event => {
		setUsername(event.target.value)
	}
	const handlePassword = event => {
		setPassword(event.target.value)
	}
	const handleConfirm = event => {
		setConfirm(event.target.value)
	}
	const registerUser = event => {
		event.preventDefault()

		if (password !== confirm) {
			console.log('Not Matching')
		} else {
			console.log('Matching - Register user.')
		}
	}

	return (
		<form>
			<input
				placeholder="Username"
				value={username}
				onChange={handleUsername}
				required={true}
			></input>
			<br></br>
			<input
				placeholder="Password"
				value={password}
				onChange={handlePassword}
				required={true}
			></input>
			<br></br>
			<input
				placeholder="Confirm Password"
				onChange={handleConfirm}
				value={confirm}
				required={true}
			></input>
			<br></br>
			<button onClick={registerUser}>Register</button>
		</form>
	)
}

export default Register
