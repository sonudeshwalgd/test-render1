import express from "express" 
import mongoose from "mongoose"
import {User} from "./model/user/index.js"
// const user =require("./model/user/index.js") 

const app=express()
mongoose.connect("mongodb://localhost:27017").then(()=>console.log("connected to mongodb"))


app.use(express.urlencoded({extended:true}))

app.set("view engine ")


app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/",(req,res)=>{
    const data=new User(req.body)
    console.log(data)
    data.save()
    res.send("done")
    
})

app.listen("5000",()=>{
    console.log("lidtning")
})

