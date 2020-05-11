const { generateName } = require('../helpers/nameHelper')
const GameList = require('../models/GameList')

const mongoController = {
	newList: async (req, res) => {
		const listName = generateName()
		const gameList = new GameList({ name: listName })
		await gameList.save()
		res.json({ message: 'New list added.', list: gameList })
	},
	getLists: async (req, res) => {
		const lists = await GameList.find()
		res.json(lists)
	},
	getList: async (req, res) => {
		const id = req.params.id

		const list = await GameList.findById({ _id: id })
		res.json(list)
	}
	// testGet: async (req, res) => {
	// 	try {
	// 		const viewData = await Test.find()
	// 		res.json(viewData)
	// 	} catch (error) {
	// 		console.error(error.message)
	// 	}
	// },
	// testPost: async (req, res) => {
	// 	try {
	// 		const test = new Test({
	// 			testdata: 'testing'
	// 		})
	// 		await test.save()
	// 		res.json(test)
	// 	} catch (error) {
	// 		console.error(error.message)
	// 	}
	// },
	// testRemoveAll: async (req, res) => {
	// 	try {
	// 		await Test.deleteMany({})
	// 	} catch (error) {
	// 		console.error(error.message)
	// 	}
	// }
}
module.exports = mongoController
