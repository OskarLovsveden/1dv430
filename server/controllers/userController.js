// https://gitlab.lnu.se/1dv023/student/ol222hf/assignment-2
// Based on my controllers from the course 1dv023

const User = require('../models/User')

const userController = {}

// Register
userController.register = async (req, res) => {
	try {
		const exists = await User.findOne({ username: req.body.username })
		if (exists) throw new Error('User already exists.')

		const account = new User({
			username: req.body.username,
			password: req.body.password
		})

		await account.save()

		const message = {
			type: 'success',
			text: 'The account was registered successfully.'
		}
		res.json(message)
	} catch (error) {
		const message = { type: 'danger', text: error.message }
		res.json(message)
	}
}

// Login
userController.login = async (req, res) => {
	try {
		if (req.session.user) throw new Error('User already logged in.')

		const user = await User.authenticate(req.body.username, req.body.password)
		req.session.regenerate(() => {
			// if (user.username) {
			req.session.user = user.username
			// }

			const message = { type: 'success', text: 'Login successful.' }
			res.json(message)
		})
	} catch (error) {
		const message = { type: 'danger', text: error.message }
		res.json(message)
	}
}

// Check for session
userController.session = async (req, res) => {
	try {
		if (req.session.user) {
			res.json(req.session.user)
		} else {
			res.json(null)
		}
	} catch (error) {
		console.error(error)
	}
}

module.exports = userController
