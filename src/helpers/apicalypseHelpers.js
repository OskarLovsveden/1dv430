// Dependencies
import dotenv from 'dotenv'
import apicalypse from 'apicalypse'

dotenv.config()

const requestOptions = {
	queryMethod: 'body',
	method: 'post',
	headers: {
		Accept: 'application/json',
		'user-key': process.env.REACT_APP_IGDB_KEY
	},
	responseType: 'json'
}

const apicalypseHelpers = {
	// Fetch games based of searchstring
	getGames: async userInput => {
		const response = await apicalypse(requestOptions)
			.fields('*')
			.search(userInput)
			.request('/games')

		return response.data
	},
	// Get game cover based of gameID
	getGameCover: async gameID => {
		const response = await apicalypse(requestOptions)
			.fields('*')
			.search(gameID)
			.request('/covers')

		return response.data
	}
}

export default apicalypseHelpers
