var express = require('express')
var router = express.Router()
var categoryController = require('../controllers/categorycontroller')
var productController = require('../controllers/productcontroller')

router.use('/categories', categoryController)
router.use('/products', productController)

module.exports = router