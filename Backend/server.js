const express = require('express')
const app = express()
const db = require('./db')   
const port = 3000
app.listen(port,  (res,req) =>{
    console.log(`server ids running on port ${port}`)
})