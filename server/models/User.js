// https://gitlab.lnu.se/1dv023/student/ol222hf/assignment-2
// Based on my userschema from the course 1dv023

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true,
			minlength: [
				10,
				'The password must be of the minimum length of 10 characters.'
			]
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
)

userSchema.pre('save', async function () {
	this.password = await bcrypt.hash(this.password, 12)
})

userSchema.statics.authenticate = async function (username, password) {
	const user = await this.findOne({ username })

	if (!user || !(await bcrypt.compare(password, user.password))) {
		throw new Error('Invalid login attempt.')
	}

	return user
}

const User = mongoose.model('User', userSchema)

module.exports = User
