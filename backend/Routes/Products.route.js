const express=require('express');
const {ProductModel} =require('../models/Products.model')
const productRouter= express.Router()

// productRouter.get("/",(req,res)=>{
//     res.send("All the costemetic Products")
// })
productRouter.get("/", async(req,res) =>{
    
    let query=req.query
    try{
        const costemetic=await ProductModel.find(query)
        res.send(costemetic)
    }
    catch(err) {
        console.log(err)
        res.send("Data of all super heroes")
    }
})

productRouter.post("/create",async(req,res)=>{
    const payload =req.body;
    try {
        const new_note= new ProductModel(payload)
        await new_note.save()
        res.send("Created the notes")
    } catch (error) {
        console.log(error);
        res.send({"msg":"Something went wrong"})
    }
})
// noteRouter.patch("/update/:id",async(req,res)=>{
//     const payload =req.body;
//     const id= req.params.id
//     try {
//         await NoteModel.findByIdAndUpdate({"_id":id},payload)
//         res.send("Updated the note")
//     } catch (error) {
//         console.log(error)
//         res.send({"msg":"Something went wrong"})
//     }
// })

// noteRouter.delete("/delete/:id",async(req,res)=>{
//     const id=req.params.id
//     try {
//         await NoteModel.findByIdAndDelete({"_id":id})
//         res.send("Deleted the note")
//     } catch (error) {
//         console.log(error)
//         res.send({"msg":"Something went wrong"})
//     }
// })
module.exports={
    productRouter
}