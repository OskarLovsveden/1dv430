const List = require('../models/List')
const User = require('../models/User')
const app = require('../server')

const SUT = require('supertest-session')(app)
const chai = require('chai')
const should = chai.should()

function clearDatabase() {
	List.deleteMany({}, () => {})
	User.deleteMany({}, () => {})
}
clearDatabase()

describe('SUT', () => {
	const userdataSUT = { name: 'tester', password: 'test1test2' }

	// Register test user
	describe('Register user', () => {
		describe('Once', () => {
			it('Should return status 200 and a successful flash message', done => {
				SUT.post('/user/register')
					.send({ username: userdataSUT.name, password: userdataSUT.password })
					.expect(200)
					.end((err, res) => {
						res.body.should.have.property('type', 'success')
						res.body.should.have.property(
							'text',
							'The account was registered successfully.'
						)
						done()
					})
			})
		})

		describe('Twice', () => {
			it('Should return status 200 and a unsuccessful flash message', done => {
				SUT.post('/user/register')
					.send({ username: userdataSUT.name, password: userdataSUT.password })
					.expect(200)
					.end((err, res) => {
						res.body.should.have.property('type', 'danger')
						res.body.should.have.property('text', 'User already exists.')
						done()
					})
			})
		})
	})

	// Login user
	describe('Login user', () => {
		describe('Once', () => {
			it('Should return status 200 and a successful flash message', done => {
				SUT.post('/user/login')
					.send({ username: userdataSUT.name, password: userdataSUT.password })
					.expect(200)
					.end((err, res) => {
						res.body.should.have.property('type', 'success')
						res.body.should.have.property('text', 'Login successful.')
						done()
					})
			})
		})

		describe('Twice', () => {
			it('Should return status 200 and a unsuccessful flash message', done => {
				SUT.post('/user/login')
					.send({ username: userdataSUT.name, password: userdataSUT.password })
					.expect(200)
					.end((err, res) => {
						res.body.should.have.property('type', 'danger')
						res.body.should.have.property('text', 'User already logged in.')
						done()
					})
			})
		})
	})

	// Check for active session
	describe('Test for active session', () => {
		it('Should return status 200 and the current user', done => {
			SUT.get('/user/session')
				.expect(200)
				.end((err, res) => {
					res.body.should.equal(userdataSUT.name)
					done()
				})
		})
	})

	// Add new list
	const listdataSUT = { name: 'testlist' }
	let listForSUT

	describe('Add list', () => {
		it('Should return status 200, a successful flash message and the created list', done => {
			SUT.post('/mongo/list/new')
				.send({ name: listdataSUT.name })
				.expect(200)
				.end((err, res) => {
					const message = res.body.message
					message.should.have.property('type', 'success')
					message.should.have.property(
						'text',
						`New list added: ${listdataSUT.name}`
					)

					const list = res.body.list
					list.should.have.property('games').that.is.a('array')
					list.should.have.property('_id').that.is.a('string')
					list.should.have.property('name', listdataSUT.name)
					list.should.have.property('author', userdataSUT.name)

					listForSUT = list
					done()
				})
		})
	})

	// Add game to list
	const gameData = { id: 12345, name: 'Game Name' }

	describe('Add game to list', () => {
		describe('Once', () => {
			it('Should return status 200 and a successful flash message', done => {
				SUT.post(`/mongo/save/${listForSUT._id}`)
					.send(gameData)
					.expect(200)
					.end((err, res) => {
						res.body.should.have.property('type', 'success')
						res.body.should.have.property('text', 'Game added to testlist')
						done()
					})
			})
		})
		describe('Twice', () => {
			it('Should return status 409 and a unsuccessful flash message', done => {
				SUT.post(`/mongo/save/${listForSUT._id}`)
					.send(gameData)
					.expect(409)
					.end((err, res) => {
						res.body.should.have.property('type', 'danger')
						res.body.should.have.property(
							'text',
							'Game already added to testlist'
						)
						done()
					})
			})
		})
	})

	// View current users lists
	describe('View test-users lists', () => {
		it('Should return status 200 and a successful flash message', done => {
			SUT.get(`/mongo/lists/${userdataSUT.name}`)
				.expect(200)
				.end((err, res) => {
					res.body[0].should.have.property('_id', listForSUT._id)
					res.body[0].should.have.property('name', listForSUT.name)
					res.body[0].should.have.property('author', listForSUT.author)
					res.body[0].games[0].should.have.property('id', gameData.id)
					res.body[0].games[0].should.have.property('name', gameData.name)
					done()
				})
		})
	})

	// Logout user
	describe('Logout user', () => {
		it('Should return status 200 and a successful flash message', done => {
			SUT.post('/user/logout')
				.expect(200)
				.end((err, res) => {
					res.body.should.have.property('type', 'success')
					res.body.should.have.property('text', 'Logout successful.')
					done()
				})
		})
	})

	// Check for deactivated session
	describe('Test for deactivated session', () => {
		it('Should return status 200 and null', done => {
			SUT.get('/user/session')
				.expect(200)
				.end((err, res) => {
					should.not.exist(res.body)
					done()
				})
		})
	})
})

clearDatabase()
