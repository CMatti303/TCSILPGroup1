const express = require('express')
const router = express.Router()

const bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({ extended: true }))
router.use(bodyparser.json())

const Product = require('../schemas/Product')

//Return the list of all products from products_table
router.get('/', async (req,res)=>{
    try{
        let products =await Product.find({})
        res.status(200).send(products)
    }catch (err){
        console.log(err)
        res.status(500).send(err)
    }
    
})

//Using URI Parameter (caterory_id) to return list of products which have this category_id
router.get('/:category_id', (req, res) => {
    const categoryId = req.params['category_id']
    Product.find({ "category_id": categoryId }, (err, result) => {
        if (err)
            res.send(err)
        else
            res.json(result)
    })
})
module.exports = router