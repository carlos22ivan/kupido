const express = require('express')
const router = express.Router()
const homeController = require('./controllers/home.controller')

router.route('/').get(homeController.homePage)
router.route('/reservar').get(homeController.reservarPage)
router.route('/el-castillo').get(homeController.motel1)
router.route('/eclipse').get(homeController.motel2)
router.route('/qatar').get(homeController.motel3)
router.route('/la-kaskada').get(homeController.motel4)
router.route('/*').get(homeController.homePage)

module.exports = router