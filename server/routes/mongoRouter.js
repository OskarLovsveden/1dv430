const express = require('express')
const router = express.Router()

const controller = require('../controllers/mongoController')

// Lists
router.get('/lists', controller.getLists)
router.post('/lists/new', controller.newList)

// List
router.get('/list/:id', controller.getList)

module.exports = router
