var express = require('express')
var router = express.Router()
var productController = require('../controllers/productcontroller')

router.use('', productController)

module.exports = router