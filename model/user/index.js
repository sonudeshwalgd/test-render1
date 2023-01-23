import mongoose  from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        
    }
})

export const User=mongoose.model("users",userSchema)

