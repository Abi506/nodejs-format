const User=require('../models/users')


const handleGetAllUsers=async(req,res)=>{
    const data=await User.find({})
    console.log(data,'data')
   
    res.send(data)

}

const handleCreateuser=async(req,res)=>{
    console.log(req.body,'request body')
    const body=req.body;
    console.log("The below are body details")
    console.log(body)
    if(!body|| !body.firstName || !body.lastName || !body.email || !body.gender || !body.jobTitle ){
        return res.status(400).json({msg:"Enter all details"})
    }
    const result=await User.create({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        gender:body.gender,
        jobTitle:body.jobTitle
    });
    console.log("----result-----");
    console.log(result);
     res.status(201).json({msg:"The status is success"})
}

const handleGetUserById=async(req,res)=>{
    const id=req.params.id
    console.log("----below id -------")
    console.log(id)
    const user=await User.findById(id)
    console.log(user)
    res.send(user)
}

const handleUpdateUserById=async(req,res)=>{
    const id=req.params.id
    const updateData=req.body
    console.log("-----update data-----")
    console.log(updateData)
    const user=await User.findByIdAndUpdate(id,updateData)
    res.send("success")
}

const handleDeleteUserById=async(req,res)=>{
    const id=req.params.id
    const user=await User.findByIdAndDelete(id)
    res.send("Deleted Successfulyy")
}

module.exports={
    handleGetAllUsers,handleGetUserById,handleUpdateUserById,handleDeleteUserById,handleCreateuser
}