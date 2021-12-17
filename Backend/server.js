const express = require('express')
const app = express()
const db = require('./db')   
const port = 3000
var cors = require('cors');
var productRoutes = require('./routes/product')
var homepageRoutes = require('./routes/homepage')
app.use(cors());

app.use('/api/v1/homepage', homepageRoutes)
app.use('/api/v1/products', productRoutes)

app.listen(port,  (res,req) =>{
    console.log(`server is running on port ${port}`)
})