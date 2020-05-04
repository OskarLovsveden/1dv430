// Axios
const axios = require('axios')

const igdbController = {}

// Test IGDB connection
const pingIGDB = async () => {
	const response = await axios('https://api-v3.igdb.com')
	return response.data
}

igdbController.test = async (req, res) => {
	try {
		const test = await pingIGDB()
		res.json(test)
	} catch (error) {
		console.error(error.message)
	}
}

module.exports = igdbController
