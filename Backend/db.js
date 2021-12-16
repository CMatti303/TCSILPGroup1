//Connect with the MongoDB Database

const mongoose = require('mongoose')

const myserverlocation = 'mongodb://localhost:27017/ILPGroup1'

mongoose.connect(
    myserverlocation,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err)=>{
        if(err){
            console.log("error")
        }
    }
)