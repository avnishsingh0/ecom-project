const express= require('express')
const userRouter= express.Router()
const {UserModel} =require("../models/User.model")
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')


userRouter.post("/register",async(req,res)=>{
    const {email,pass,name,age}= req.body
    try {
        bcrypt.hash(pass, 5,async (err, hash)=> {
            // Store hash in your password DB.
            if(err){
                console.log(err)
            }else{
                const user= new UserModel({email,pass:hash,name,age})
                await user.save()
                res.send("Resgister")
            }
        });
        
    } catch (error) {
        res.send("Error in registering the user")
        console.log(error);
    }
    
})

userRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    try {
        const user= await UserModel.find({email})
        const hashed_pass= user[0].pass
        if(user.length>0){
            bcrypt.compare(pass, hashed_pass, (err, result)=> {
                if(result){
                    const token = jwt.sign({ foo: 'bar' }, 'avnish');
                    res.send({"msg":"Login Success","token":token})
                }else{
                    res.send("Wrong Credntials")
                }
            });
        }else{
            res.send("Wrong Credntials")
        }
    } catch (error) {
        res.send("Something went Wrong")
        console.log(error)
    }
})


module.exports={
    userRouter
}