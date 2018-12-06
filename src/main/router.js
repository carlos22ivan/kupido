const express = require('express')
const router = express.Router()
const homeController = require('./controllers/home.controller')

router.route('/').get(homeController.homePage)
router.route('/reservar').get(homeController.reservarPage)

module.exports = router