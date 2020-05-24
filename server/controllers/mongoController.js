const { generateName } = require('../helpers/nameHelper')
const List = require('../models/List')

const createError = require('http-errors')

const mongoController = {}

// New List
mongoController.newList = async (req, res) => {
	try {
		const listName = generateName()
		const list = new List({ name: listName, author: req.session.user })
		list.save()

		const message = {
			type: 'success',
			text: `New list: ${list.name}`
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

// Get all lists
mongoController.getLists = async (req, res) => {
	try {
		const lists = await List.find()
		res.json(lists)
	} catch (error) {
		console.error(error.message)
	}
}

// Get specific list of _id
mongoController.getList = async (req, res) => {
	try {
		const id = req.params.id
		const list = await List.findById({ _id: id })
		res.json(list)
	} catch (error) {
		console.error(error.message)
	}
}

// Save game to list with given list _id
mongoController.saveGame = async (req, res) => {
	try {
		const id = req.params.listid
		const data = req.body

		const list = await List.findById({ _id: id })
		list.games = [...list.games, data]
		list.games = list.games.filter(
			(game, index, self) => index === self.findIndex(g => g.id === game.id)
		)
		list.save()

		const message = {
			type: 'success',
			text: `Game added to ${list.name}`
		}

		res.json(message)
	} catch (error) {
		console.error(error.message)
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
