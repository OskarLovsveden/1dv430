const path = require('path')

// Dotenv
const dotenv = require('dotenv')
dotenv.config()

// Axios
const axios = require('axios')

// Express
const express = require('express')
const app = express()

// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
// 	res.header(
// 		'Access-Control-Allow-Headers',
// 		'Origin, X-Requested-With, Content-Type, Accept'
// 	)
// 	next()
// })

const IGDB = async () => {
	const response = await axios(process.env.API_URL)
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
const port = process.env.PORT || 8000
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})
