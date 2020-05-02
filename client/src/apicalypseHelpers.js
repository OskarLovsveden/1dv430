// Dependencies
import dotenv from 'dotenv'
import apicalypse from 'apicalypse'

dotenv.config()

const apicalypseHelpers = {}

apicalypseHelpers.getGames = async userInput => {
	const requestOptions = {
		queryMethod: 'body',
		method: 'post', // The default is `get`
		// baseURL: process.env.REACT_APP_IGDB_URL,
		headers: {
			Accept: 'application/json',
			'user-key': process.env.REACT_APP_IGDB_KEY
		},
		responseType: 'json'
	}

	const response = await apicalypse(requestOptions)
		.fields('name')
		.search(userInput)
		.request('/games')

	return response.data
}

export default apicalypseHelpers
