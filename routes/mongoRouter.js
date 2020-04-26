const express = require('express')
const router = express.Router()

const controller = require('../controllers/mongoController')

router.get('/test-get', controller.testGet)
router.post('/test-post', controller.testPost)
router.post('/test-remove', controller.testRemoveAll)

module.exports = router
