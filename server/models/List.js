const mongoose = require('mongoose')

// Create a schema.
const listSchema = new mongoose.Schema(
	{
		name: String,
		ownerID: Number,
		games: [Object]
	},
	{
		timestamps: true,
		versionKey: false
	}
)

// Create a model using the schema.
const List = mongoose.model('List', listSchema)

// Exports
module.exports = List