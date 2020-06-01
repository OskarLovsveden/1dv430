const createError = require('http-errors')
const List = require('../models/List')

const { generateName } = require('../helpers/nameHelper')
const mongoController = {}

// New List
mongoController.newList = async (req, res) => {
	try {
		const listName = generateName()
		const list = new List({ name: listName, author: req.session.user })
		list.save()

		const message = {
			type: 'success',
			text: `New list added: ${list.name}`
		}

		res.json({ message: message, list: list })
	} catch (error) {
		const message = {
			type: 'danger',
			text: `Failed to add list`
		}
		res.json(message)
	}
}

// Update list
mongoController.updateList = async (req, res) => {
	try {
		const result = await List.updateOne({ _id: req.list.id }, { ...req.body })

		if (result.nModified === 1) {
			const message = {
				type: 'success',
				text: 'The list was updated successfully.'
			}
			res.json(message)
		}
	} catch (error) {
		const message = { type: 'danger', text: error.message }
		res.json(message)
	}
}

// Update list
mongoController.deleteList = async (req, res) => {
	try {
		await List.deleteOne({ _id: req.list.id })

		const message = {
			type: 'success',
			text: 'The list was deleted successfully.'
		}
		res.json(message)
	} catch (error) {
		const message = { type: 'danger', text: error.message }
		res.json(message)
	}
}

// Get all lists
mongoController.getLists = async (req, res) => {
	try {
		const lists = await List.find()
		res.json(lists)
	} catch (error) {
		const message = { type: 'danger', text: error.message }
		res.json(message)
	}
}

// Get specific list of _id
mongoController.getList = async (req, res) => {
	try {
		const list = await List.findById({ _id: req.params.id })
		res.json(list)
	} catch (error) {
		const message = { type: 'danger', text: error.message }
		res.json(message)
	}
}

// Save game to list with given list _id
mongoController.saveGame = async (req, res) => {
	try {
		const id = req.params.listid
		const data = req.body

		const list = await List.findById({ _id: id })
		let message

		if (list.games.some(game => game.id === data.id)) {
			message = {
				type: 'danger',
				text: `Game already added to ${list.name}`
			}
		} else {
			list.games = [...list.games, data]
			list.save()

			message = {
				type: 'success',
				text: `Game added to ${list.name}`
			}
		}

		res.json(message)
	} catch (error) {
		const message = { type: 'danger', text: error.message }
		res.json(message)
	}
}

// Check if user is logged in
mongoController.isUserLoggedIn = async (req, res, next) => {
	try {
		if (!req.session.user) {
			return next(createError(403, 'Forbidden access'))
		}
		next()
	} catch (error) {
		next(error)
	}
}

// Authorize user for CRUD functionality
mongoController.authorizeUser = async (req, res, next) => {
	try {
		const list = await List.findOne({ _id: req.params.id })
		if (req.session.user !== list.author) {
			return next(createError(403))
		}
		req.list = list

		next()
	} catch (error) {
		next(error)
	}
}

module.exports = mongoController
