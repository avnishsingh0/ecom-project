const express= require('express');
const {errorHandler}= require('./middlewares/errorMiddleware')
const products= require('./data/products')
const dotenv=require('dotenv')
const connectDb=require('./config/db')
const orderRoutes= require("./routes/orderRoutes")
connectDb()
const productRoutes= require('./routes/productsRoutes')
var cors = require('cors')
require("colors");
const userRoutes = require('./routes/UserRoutes')
dotenv.config();
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Welcome to Home page")
})
app.use("/",productRoutes)
app.use("/users",userRoutes)
app.use("/order",orderRoutes)

app.use(errorHandler)
const PORT=8000;
app.listen(process.env.PORT||PORT,()=>{
    console.log(
        `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
          .inverse
      );
})