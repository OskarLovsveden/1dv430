const IGDB = require('../helpers/igdbHelpers')

const igdbController = {}

igdbController.test = async (req, res) => {
	try {
		const response = await IGDB.ping()
		res.json(response)
	} catch (error) {
		console.error(error.message)
	}
}

igdbController.games = async (req, res) => {
	try {
		const input = req.params.input
		const data = await IGDB.getGames(input)
		res.json(data)
	} catch (error) {
		console.error(error.message)
	}
}

module.exports = igdbController
