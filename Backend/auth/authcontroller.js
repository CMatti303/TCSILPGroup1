const express = require('express')
const router = express.Router()
const app = express()

const bodyparser = require('body-parser')
router.use(bodyparser.urlencoded({ extended: true }))
router.use(bodyparser.json())

const login = require('../schema/schema')
app.set('view engine', 'ejs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = { 'secret': 'secret' }

//Register the User

router.post('/register', (req, res) => {
    const hashpassword = bcrypt.hashSync(req.body.password, 8)
    login.create({
        email: req.body.email,
        password: hashpassword
    }, (err, data) => {
        if (err) {
            return res.status(500).send("Internal Server Error")
        }
        else {
            var token = jwt.sign({ id: data._id }, config.secret, { expiresIn: 3600 })
            return res.status(200).send({ auth: true, token: token })
        }
    })
})

//Login the User

router.post('/login', (req, res) => {
    login.findOne({
        email: req.body.email
    }, (err, data) => {
        if (err) return res.status(500).send("Internal Server Error")
        const nouser = encodeURIComponent('User Not Found')
        if (!data) {
            res.redirect('/?nouser=' + nouser)
        }
        else {
            const validate = bcrypt.compareSync(req.body.password, data.password)
            if (!validate) return res.status(401).send({ auth: false, token: null })
            var token = jwt.sign({ id: data._id }, config.secret, { expiresIn: 3600 })
            return res.status(200).send({ auth: true, token: token })
        }
    })
})

module.exports = router