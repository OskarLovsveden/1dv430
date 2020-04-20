// Dotenv
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	PORT: process.env.PORT,
	API_URL: 'https://api-v3.igdb.com',
	API_KEY: '6db00c892958c8b1b4d006aeee23ed21'
}
