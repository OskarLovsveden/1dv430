// Dotenv
const dotenv = require('dotenv')
dotenv.config()

// Axios
const axios = require('axios')

// Express
const express = require('express')
const app = express()

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	next()
})

const IGDB = async () => {
	const response = await axios(process.env.API_URL)
	return response.data
}

app.get('/', async (req, res) => {
	const test = await IGDB()
	res.json(test)
})

// Start listening
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
