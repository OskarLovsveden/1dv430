// Config
const mongoose = require('./config/mongoose')
const config = require('./config/dotenv')
const { PORT } = config

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// connect to the database
mongoose.connect().catch(error => {
	console.error(error)
	process.exit(1)
})

// routes
app.use('/igdb', require('./routes/igdbRouter'))
app.use('/mongo', require('./routes/mongoRouter'))
app.use('/user', require('./routes/userRouter'))

// Serve static assets if in production.
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static(path.resolve(__dirname, '..', 'build')))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
	})
}

// Start listening
const port = PORT || 8000
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})

module.exports = app
