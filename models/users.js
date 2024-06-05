const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    firstName:{
        type:"string",
        required:true
    },
    lastName:{
        type:"string"
    },
    email:{
        type:"string",
        required:"true",
        unique:'true'
    },
    jobTitle:{
        type:"string"
    }
})

const User=mongoose.model("user",userSchema)
module.exports=User