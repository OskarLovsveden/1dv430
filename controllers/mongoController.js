const Test = require('../models/Test')
const mongoController = {}

mongoController.testGet = async (req, res) => {
	try {
		const viewData = await Test.find()
		res.json(viewData)
	} catch (error) {
		console.error(error.message)
	}
}

mongoController.testPost = async (req, res) => {
	try {
		const test = new Test({
			testdata: 'testing'
		})
		await test.save()
		res.json(test)
	} catch (error) {
		console.error(error.message)
	}
}

mongoController.testRemoveAll = async (req, res) => {
	try {
		await Test.deleteMany({})
	} catch (error) {
		console.error(error.message)
	}
}

module.exports = mongoController
