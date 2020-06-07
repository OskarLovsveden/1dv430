const express = require('express')
const router = express.Router()

const controller = require('../controllers/igdbController')

router.get('/test', controller.test)
router.get('/games-with-covers/:input', controller.gamesWithCovers)
router.get('/games/:input', controller.games)
router.get('/covers/:gameID', controller.covers)

module.exports = router
