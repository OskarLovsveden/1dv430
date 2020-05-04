const GameList = require('../models/GameList')
const mongoController = {
	newList: async (req, res) => {
		const gameList = new GameList()
		await gameList.save()
		res.json('New list added.')
	},
	getLists: async (req, res) => {
		const lists = await GameList.find()
		res.json(lists)
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
