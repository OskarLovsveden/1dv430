const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	PORT: process.env.PORT,
	DB_STRING: process.env.DB_CONNECTION_STRING,
	IGDB_URL: process.env.IGDB_URL,
	IGDB_KEY: process.env.IGDB_KEY,
	SESS_NAME: process.env.SESSION_NAME,
	SESS_SECRET: process.env.SESSION_SECRET
}
