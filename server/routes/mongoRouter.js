const express = require('express')
const router = express.Router()

const controller = require('../controllers/mongoController')

// Lists
router.get('/lists', controller.getLists)
router.get('/lists/:author', controller.getLists)

// List
router.get('/list/:id', controller.getList)
router.post('/list/new', controller.isUserLoggedIn, controller.newList)
router.post('/list/update/:id', controller.authorizeUser, controller.updateList)
router.post('/list/delete/:id', controller.authorizeUser, controller.deleteList)

// Save game
router.post('/save/:listid', controller.isUserLoggedIn, controller.saveGame)

module.exports = router
