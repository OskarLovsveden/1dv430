const express = require('express')
const router = express.Router()

const controller = require('../controllers/igdbController')

router.get('/', (req, res) => res.sendStatus(200))
router.get('/test', controller.test)

module.exports = router
