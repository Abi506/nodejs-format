const fs=require("fs")
const log=(filename)=>{
    return(req,res,next)=>{
        fs.appendFile(filename,`\n ${new Date().toLocaleDateString()}: ip address - ${req.ip}: request method - ${req.method}: req path - ${req.path} \n`,(error,res)=>{
            next()
        })
    }
}
module.exports={
    log
}