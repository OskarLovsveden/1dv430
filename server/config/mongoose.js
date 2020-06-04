const mongoose = require('mongoose')
const config = require('./dotenv')
const { DB_STRING } = config

const CURR_DB_STRING =
	process.env.NODE_ENV === 'production'
		? DB_STRING
		: 'mongodb+srv://testuser:RQYPgffO5MHFjk87@1dv430-i6ud6.mongodb.net/testing?retryWrites=true&w=majority'

module.exports.connect = async () => {
	mongoose.connection.on('connected', () =>
		console.log('Mongoose connection is open.')
	)
	mongoose.connection.on('error', err =>
		console.error(`Mongoose connection error has occurred: ${err}`)
	)
	mongoose.connection.on('disconnected', () =>
		console.log('Mongoose connection is disconnected.')
	)

	process.on('SIGINT', () => {
		mongoose.connection.close(() => {
			console.log(
				'Mongoose connection is disconnected due to application termination.'
			)
			process.exit(0)
		})
	})

	return mongoose.connect(CURR_DB_STRING, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
}
