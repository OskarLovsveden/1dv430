const Test = require('../models/Test')
const mongoController = {}

mongoController.testGet = async (req, res) => {
	try {
		const viewData = {
			tests: await Test.find()
		}
		res.json(viewData)
	} catch (error) {
		console.error(error.message)
	}
}

mongoController.testPost = async (req, res) => {
	try {
		console.log('controller testPost()')
		const test = new Test({
			text: 'test'
		})
		await test.save()
		res.send('Test data created successfully!')
	} catch (error) {
		console.error(error.message)
	}
}

module.exports = mongoController
