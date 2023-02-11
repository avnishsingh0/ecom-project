const express=require('express');
const {NoteModel} =require('../models/Note.model')
const noteRouter= express.Router()

noteRouter.get("/",(req,res)=>{
    res.send("All the notes")
})

noteRouter.post("/create",async(req,res)=>{
    const payload =req.body;
    try {
        const new_note= new NoteModel(payload)
        await new_note.save()
        res.send("Created the notes")
    } catch (error) {
        console.log(error);
        res.send({"msg":"Something went wrong"})
    }
})
noteRouter.patch("/update/:id",async(req,res)=>{
    const payload =req.body;
    const id= req.params.id
    try {
        await NoteModel.findByIdAndUpdate({"_id":id},payload)
        res.send("Updated the note")
    } catch (error) {
        console.log(error)
        res.send({"msg":"Something went wrong"})
    }
})

noteRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try {
        await NoteModel.findByIdAndDelete({"_id":id})
        res.send("Deleted the note")
    } catch (error) {
        console.log(error)
        res.send({"msg":"Something went wrong"})
    }
})
module.exports={
    noteRouter
}