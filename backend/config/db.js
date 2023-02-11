const mongoose = require('mongoose')
require("dotenv").config()

module.exports=connect=async ()=>{
    return await mongoose.connect(process.env.url)
}


