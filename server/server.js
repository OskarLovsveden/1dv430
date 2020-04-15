// Dotenv
const dotenv = require('dotenv')
dotenv.config()

// Axios
const axios = require('axios')

// Express
const express = require('express')
const app = express()

const IGDB = async () => {
	const response = await axios(process.env.API_URL)
	return response.data
}

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.get('/TestIGDB', async (req, res) => {
	const test = await IGDB()
	res.send(test)
})

// Start listening
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
