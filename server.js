// Config
const config = require('./config/config')
const { PORT, API_URL, API_KEY } = config

// Node
const path = require('path')

// Axios
const axios = require('axios')

// Express
const express = require('express')
const app = express()

const IGDB = async () => {
	const response = await axios(API_URL)
	return response.data
}

app.get('/test', async (req, res) => {
	const test = await IGDB()
	res.json(test)
})

// Serve static assets if in production.
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

// Start listening
const port = PORT || 8000
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})
