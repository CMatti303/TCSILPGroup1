const express = require('express')
const router = express.Router()

const bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({ extended: true }))
router.use(bodyparser.json())

const login = require('./schema')

router.get('/', (req, res) => {
    login.find({}, (err, dbdata) => {
        if (err) {
            return res.status(500).send("Error")
        }
        else {
            return res.status(200).send(dbdata)
        }
    })
})

module.exports = router