const mongoose = require('mongoose')

const listSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, maxlength: 40 },
		author: { type: String, required: true },
		games: [Object]
	},
	{
		timestamps: true,
		versionKey: false
	}
)

const List = mongoose.model('List', listSchema)

module.exports = List
