const mongoose = require('mongoose')

// Create a schema.
const testSchema = new mongoose.Schema(
	{
		test: {
			text: String
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
)

// Create a model using the schema.
const Test = mongoose.model('Test', testSchema)

// Exports
module.exports = Test
