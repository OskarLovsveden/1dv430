const { generateName } = require('../helpers/nameHelper')
const List = require('../models/List')

const mongoController = {
	newList: async (req, res) => {
		try {
			const listName = generateName()
			const list = new List({ name: listName })
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
	},
	getLists: async (req, res) => {
		try {
			const lists = await List.find()
			res.json(lists)
		} catch (error) {
			console.error(error.message)
		}
	},
	getList: async (req, res) => {
		try {
			const id = req.params.id
			const list = await List.findById({ _id: id })
			res.json(list)
		} catch (error) {
			console.error(error.message)
		}
	},
	saveGame: async (req, res) => {
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
}
module.exports = mongoController
