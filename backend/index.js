const express = require('express')
require("dotenv").config
const  connect  = require('./config/db')
// const {connection} = require('./config/db')
// const {userRouter}= require('./Routes/User.route')
// const {noteRouter}= require('./Routes/Note.route')
// const {authenticate} = require('./middleware/authenticate.middleware')
const {productRouter}= require('./Routes/Products.route')

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home page")
})
app.use("/product",productRouter)
// app.use(authenticate)
// app.use("/notes",noteRouter)
app.listen(process.env.port,async()=>{
    try {
        await connect()
        console.log("Connected to the DB");
    } catch (error) {
        console.log("Trouble connecting the DB");
        console.log(error);
    }
    console.log(`running at ${process.env.port}`);
})