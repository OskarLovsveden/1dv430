// Dependencies
const axios = require('axios')
const config = require('../config/dotenv')
const { IGDB_URL, IGDB_KEY } = config

const IGDB = {}

// Test connection
IGDB.ping = async () => {
	const response = await axios(IGDB_URL)
	return response.data
}

// Get games based of searchstring
IGDB.getGames = async userInput => {
	const response = await axios(`${IGDB_URL}/games`, {
		headers: {
			Accept: 'application/json',
			'user-key': IGDB_KEY
		},
		responseType: 'json',
		data: `search "${userInput}";fields *;`
	})
	return response.data
}

// Get cover for game
IGDB.getCover = async coverID => {
	const response = await axios(`${IGDB_URL}/covers`, {
		headers: {
			Accept: 'application/json',
			'user-key': IGDB_KEY
		},
		responseType: 'json',
		data: `where id = ${coverID};fields *;`
	})
	return response.data
}

module.exports = IGDB
