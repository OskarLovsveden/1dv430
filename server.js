// Config
const config = require('./config/dotenv')
const mongoose = require('./config/mongoose')
const { PORT, API_URL, API_KEY } = config

// Node
const path = require('path')

// Axios
const axios = require('axios')

// Express
const express = require('express')
const app = express()

// connect to the database
mongoose.connect().catch(error => {
	console.error(error)
	process.exit(1)
})

// Test IGDB connection
const pingIGDB = async () => {
	const response = await axios(API_URL)
	return response.data
}

// Route for testing IGDB connection
app.get('/testIGDB', async (req, res) => {
	const test = await pingIGDB()
	res.json(test)
})

const Test = require('./models/Test')

// Route for testing MongoDB connection
app.get('/testMongoDB', async (req, res) => {
	console.log('test mongoDB')
	const test = new Test({
		text: 'test'
	})

	await test.save()
	res.json('test')
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
