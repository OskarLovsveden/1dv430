const mongoose = require('./config/mongoose')
const config = require('./config/dotenv')
const { PORT, SESS_SECRET, SESS_NAME } = config

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const helmet = require('helmet')
const app = express()

// Connect to database
mongoose.connect().catch(error => {
	console.error(error)
	process.exit(1)
})

app.use(helmet())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Session options
const sessionOptions = {
	name: SESS_NAME,
	secret: SESS_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24
	}
}

// Set session with options
app.use(session(sessionOptions))

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

// Listen
const port = PORT || 8000
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})

module.exports = app
