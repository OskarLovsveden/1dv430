const express = require('express')
const router = express.Router()

const controller = require('../controllers/mongoController')

// Lists
router.get('/lists', controller.getLists)

// List
router.get('/list/:id', controller.getList)
router.post('/list/new', controller.newList)

// Game
router.post('/save/:listid', controller.saveGame)

module.exports = router
