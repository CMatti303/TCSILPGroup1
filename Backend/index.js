const express = require('express')
const app = express()

const db = require('./db')    //connect with database
var schemacontroller = require('./schema/schemacontroller') //query
app.use('/users', schemacontroller) //query to endpoint users

var authcontroller = require('./auth/authcontroller')
app.use('/auth', authcontroller)  //authentication implementation

const session = require('express-session')
app.use(session({ secret: 'loginsecret', resave: false, saveUninitialized: false }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000)