const mongoose = require('mongoose')

const Loginschema = new mongoose.Schema({
    email: String,
    password: String
})

module.exports = mongoose.model('login', Loginschema, 'logintable')