const User = require('../models/User')

const userController = {}

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

userController.login = async (req, res) => {
	try {
		//   if (req.session.user) throw new Error('User already logged in.')

		// const user = await User.authenticate(req.body.username, req.body.password)
		//   req.session.regenerate(() => {})

		// if (user.username) {
		//     req.session.user = user.username
		// }

		await User.authenticate(req.body.username, req.body.password)

		const message = { type: 'success', text: 'Login successful.' }
		res.json(message)
	} catch (error) {
		const message = { type: 'danger', text: error.message }
		res.json(message)
	}
}

module.exports = userController
