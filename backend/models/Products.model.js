const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    image:String,
    title:String,
    category:String,
    price:Number,
    shades:Number
})

const ProductModel = mongoose.model("product",productSchema)

module.exports={
    ProductModel
}