const express = require('express')
const router = express.Router()

const controller = require('../controllers/igdbController')

router.get('/test', controller.test)
router.get('/games/:input', controller.games)

module.exports = router
