// Dependencies
import dotenv from 'dotenv'
import apicalypse from 'apicalypse'

dotenv.config()

const apicalypseHelpers = {}

apicalypseHelpers.getGames = async userInput => {
	const requestOptions = {
		queryMethod: 'body',
		method: 'post',
		headers: {
			Accept: 'application/json',
			'user-key': process.env.REACT_APP_IGDB_KEY
		},
		responseType: 'json'
	}

	const response = await apicalypse(requestOptions)
		.fields('name,genres')
		.search(userInput)
		.request('/games')

	console.log(process.env)
	return response.data
}

export default apicalypseHelpers
