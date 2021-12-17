const mongoose = require('mongoose')

const Productschema = new mongoose.Schema({
    id: Number,
    name: String,
    category_id: Number,
    price: Number,
    discountPrice: Number,
    image: String,
    description: String,
    createdOn: {type:Date, default: Date.now},
    isTopProduct: Boolean
}, { versionKey: false })

module.exports = mongoose.model('Product', Productschema, 'products_table')