const { generateName } = require('../helpers/nameHelper')
const List = require('../models/List')

const mongoController = {
	newList: async (req, res) => {
		const listName = generateName()
		const list = new List({ name: listName })
		list.save()
		res.json({ message: 'New list added.', list: list })
	},
	getLists: async (req, res) => {
		const lists = await List.find()
		res.json(lists)
	},
	getList: async (req, res) => {
		const id = req.params.id
		const list = await List.findById({ _id: id })
		res.json(list)
	},
	saveGame: async (req, res) => {
		const id = req.params.listid
		const data = req.body

		const list = await List.findById({ _id: id })
		list.games = [...list.games, data]
		list.save()

		res.json({ message: `Game added to ${list.name}` })
	}
}
module.exports = mongoController
