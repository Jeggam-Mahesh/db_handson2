const express=require('express');
const app=express();
const client=require('./db/connection')
const router=require('./route/userRouter')
app.use(express.json())
async function  dbconnect(req,res){
    try{
        await client.connect()
        console.log("db connected")
    }
    catch(e){
        console.log("erroe",e)
    }
}
dbconnect();
app.get("/",(req,res)=>{
    res.send("home page")
})
app.use("/user",router)
app.listen(9000,()=>{
    console.log("server 9000");
})