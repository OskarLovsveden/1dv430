const Test = require('../models/Test')

const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../server')

chai.use(chaiHttp)

// Test using expect
const expect = chai.expect

describe('Expect Express', () => {
	// MongoDB routes
	describe('Route /mongo', () => {
		before(done => {
			Test.deleteMany({}, () => {
				console.log('Cleaning - test database dropped')
			})
			return done()
		})

		// "root"
		it('url: /\n\tshould return 200 status', done => {
			chai
				.request(app)
				.get('/mongo')
				.end((err, res) => {
					expect(res.status).to.equal(200)
					done()
				})
		})

		// test-post
		it('url: /mongo/test-post\n\tshould return 200 status with saved object', done => {
			chai
				.request(app)
				.post('/mongo/test-post')
				.end((err, res) => {
					expect(res.status).to.equal(200)
					expect(res.body).to.be.a('object')
					expect(res.body).to.have.property('_id')
					expect(res.body).to.have.property('testdata')
					expect(res.body).to.have.property('createdAt')
					expect(res.body).to.have.property('updatedAt')
					done()
				})
		})

		//test-get

		//remove-all
	})

	// IGDB routes
	describe('Route /igdb', () => {
		// "root"
		it('url: /\n\texpect return 200 status', done => {
			chai
				.request(app)
				.get('/igdb')
				.end((err, res) => {
					expect(res.status).to.equal(200)
					done()
				})
		})

		// Ping IGDB
		it('url: igdb/test\n\texpect return "Hello World"', done => {
			chai
				.request(app)
				.get('/igdb/test')
				.end((err, res) => {
					expect(res.status).to.equal(200)
					expect(res.text).to.equal('"Hello World"')
					done()
				})
		})
	})

	// describe('Route /mongo', () => {
	// 	it('Should return 200 status', done => {
	// 		chai
	// 			.request(app)
	// 			.get('/mongo')
	// 			.end((err, res) => {
	// 				res.should.have.status(200)
	// 				done()
	// 			})
	// 	})
	// })

	// describe('Route /mongo/test-post', () => {
	// 	it('Should return a test object', done => {
	// 		chai
	// 			.request(app)
	// 			.post('/mongo/test-post')
	// 			.end((err, res) => {
	// 				// console.log(res)
	// 				res.should.have.status(200)
	// 				res.body.should.be.a('object')
	// 				done()
	// 			})
	// 	})
	// })
})

// Test using should
// chai.should()

// describe('Should Express', () => {
// 	beforeEach(done => {
// 		Test.deleteMany({}, err => {
// 			done()
// 		})
// 	})

// 	describe('Route /', () => {
// 		before(done => {
// 			Test.deleteMany({}, () => {
// 				console.log('Cleaning - test database dropped')
// 			})
// 			return done()
// 		})
// 		it('Should return 200 status', done => {
// 			chai
// 				.request(app)
// 				.get('/')
// 				.end((err, res) => {
// 					res.should.have.status(200)
// 					done()
// 				})
// 		})
// 	})

// 	describe('Route /igdb', () => {
// 		it('Should return 200 status', done => {
// 			chai
// 				.request(app)
// 				.get('/igdb')
// 				.end((err, res) => {
// 					res.should.have.status(200)
// 					done()
// 				})
// 		})
// 	})

// 	describe('Route /igdb/test', () => {
// 		it('Should return "Hello World"', done => {
// 			chai
// 				.request(app)
// 				.get('/igdb/test')
// 				.end((err, res) => {
// 					res.should.have.status(200)
// 					res.text.should.be.equals('"Hello World"')
// 					done()
// 				})
// 		})
// 	})

// 	describe('Route /mongo', () => {
// 		it('Should return 200 status', done => {
// 			chai
// 				.request(app)
// 				.get('/mongo')
// 				.end((err, res) => {
// 					res.should.have.status(200)
// 					done()
// 				})
// 		})
// 	})

// 	describe('Route /mongo/test-post', () => {
// 		it('Should return a test object', done => {
// 			chai
// 				.request(app)
// 				.post('/mongo/test-post')
// 				.end((err, res) => {
// 					// console.log(res)
// 					res.should.have.status(200)
// 					res.body.should.be.a('object')
// 					done()
// 				})
// 		})
// 	})
// })
