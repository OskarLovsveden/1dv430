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

igdbController.gamesWithCovers = async (req, res) => {
	try {
		const input = req.params.input
		const gamesWithoutCovers = await IGDB.getGames(input)

		let covers = await Promise.all(
			gamesWithoutCovers.map(async game => {
				if (game.cover) {
					return await IGDB.getCover(game.cover)
				}
			})
		)

		covers = covers.flat()

		const data = []

		gamesWithoutCovers.forEach(game => {
			covers.forEach(cover => {
				if (cover && game.id === cover.game) {
					data.push({
						...game,
						coverUrl: cover.url,
						coverImageID: cover.image_id
					})
				}
			})
		})

		res.json(data)
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

igdbController.covers = async (req, res) => {
	try {
		const gameID = req.params.gameID
		const data = await IGDB.getCover(gameID)
		res.json(data)
	} catch (error) {
		console.error(error.message)
	}
}

module.exports = igdbController
