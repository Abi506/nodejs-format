const express = require('express');
const mongoose=require("mongoose")
const app = express();

app.use(express.json())
const{connectMongo}=require('./connection')
connectMongo("mongodb://127.0.0.1:27017/users").then(()=>{console.log("Mongo Db Connected")})
const userRouter=require("./routes/user")
const{log}=require('./middlewares/log')




app.listen(3000, () => {
    console.log("Server Started on port 3000");
});
app.use(log("log.txt"))


app.get("/", (req, res) => {
    console.log("------the below are request------")
    console.log(req,'request')
    console.log(req.headers); // Log the headers object
    res.send("Message Sent Successfully");
});

app.use("/users",userRouter)

