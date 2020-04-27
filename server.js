// Config
const mongoose = require('./config/mongoose')
const config = require('./config/dotenv')
const { PORT } = config

// Node
const path = require('path')

// Express
const express = require('express')
const app = express()

// connect to the database
mongoose.connect().catch(error => {
	console.error(error)
	process.exit(1)
})

// routes
app.get('/', (req, res) => res.sendStatus(200))
app.use('/igdb', require('./routes/igdbRouter'))
app.use('/mongo', require('./routes/mongoRouter'))

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
