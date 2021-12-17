const mongoose = require('mongoose')

const Categoryschema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String
}, { versionKey: false })

module.exports = mongoose.model('Category', Categoryschema, 'categories_table')