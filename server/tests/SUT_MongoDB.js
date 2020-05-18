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
	// Drops List database
	// eslint-disable-next-line
	// before(done => {
	// 	List.deleteMany({}, () => {})
	// 	return done()
	// })

	// // Drops User database
	// // eslint-disable-next-line
	// before(done => {
	// 	User.deleteMany({}, () => {})
	// 	return done()
	// })

	// Register test user
	describe('Register user', () => {
		it('Should return status 200 and a successful flash message', done => {
			SUT.post('/user/register')
				.send({ username: 'tester', password: 'test1test2' })
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

	// Register test user again
	describe('Register user again', () => {
		it('Should return status 200 and a unsuccessful flash message', done => {
			SUT.post('/user/register')
				.send({ username: 'tester', password: 'test1test2' })
				.expect(200)
				.end((err, res) => {
					res.body.should.have.property('type', 'danger')
					res.body.should.have.property('text', 'User already exists.')
					done()
				})
		})
	})

	// Login user
	describe('Login user', () => {
		it('Should return status 200 and a successful flash message', done => {
			SUT.post('/user/login')
				.send({ username: 'tester', password: 'test1test2' })
				.expect(200)
				.end((err, res) => {
					res.body.should.have.property('type', 'success')
					res.body.should.have.property('text', 'Login successful.')
					done()
				})
		})
	})

	// Add new list
	// Add game to list
	// View current users lists

	// Check for active session
	describe('Test for active session', () => {
		it('Should return status 200 and the current user', done => {
			SUT.get('/user/session')
				.expect(200)
				.end((err, res) => {
					res.body.should.equal('tester')
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
