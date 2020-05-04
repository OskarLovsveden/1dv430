const mongoose = require('mongoose')

// Create a schema.
const gameListSchema = new mongoose.Schema(
	{
		games: Array
	},
	{
		timestamps: true,
		versionKey: false
	}
)

// Create a model using the schema.
const GameList = mongoose.model('GameList', gameListSchema)

// Exports
module.exports = GameList
