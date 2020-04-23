// Dotenv
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	PORT: process.env.PORT,
	API_URL: process.env.IGDB_URL,
	API_KEY: process.env.IGDB_KEY
}
