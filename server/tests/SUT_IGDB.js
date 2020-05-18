const app = require('../server')

const SUT = require('supertest')(app)
const chai = require('chai')
chai.should()

describe('SUT', () => {
	describe('Test IGDB connection', () => {
		it('Should return status 200 and Hello World', done => {
			SUT.get('/igdb/test')
				.expect(200)
				.end((err, res) => {
					res.body.should.equal('Hello World')
					done()
				})
		})
	})
})
