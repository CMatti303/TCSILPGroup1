const express = require('express')
const router = express.Router()

const bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({ extended: true }))
router.use(bodyparser.json())

const Category = require('../schemas/Category')

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

//Return the list of 3 randomly selected categories from categories_table, which has 6 categories
router.get('/', async (req,res)=>{
    try{
        let index1 = randomIntFromInterval(0, 5) //random integer between 0 and 5
        let allcategories = await Category.find({})
        let categories=[]
        categories.push( allcategories[index1])
        let index2 =randomIntFromInterval(0, 5)
        while(index2==index1){
            index2 = randomIntFromInterval(0, 5)
        }
        let index3 = randomIntFromInterval(0, 5)
        while(index3==index1 || index3==index2){
            index3 = randomIntFromInterval(0, 5)
        }
        categories.push( allcategories[index2])
        categories.push( allcategories[index3])
        
        res.status(200).send(categories)
    }catch (err){
        console.log(err)
        res.status(500).send(err)
    }
   
})

//Using URI Parameter (caterory_id) to return the name of the category which has this category_id
router.get('/:category_id', (req, res) => {
    const categoryId = req.params['category_id']
    Category.find({ "id": categoryId }, (err, result) => {
        if (err)
            res.send(err)
        else{
            console.log(result)
            res.json(result)
        }
            
    })
})

module.exports = router