const express = require('express')
const router = express.Router()

const controller = require('../controllers/mongoController')

router.get('/lists', controller.getLists)
router.post('/lists/new', controller.newList)

module.exports = router
