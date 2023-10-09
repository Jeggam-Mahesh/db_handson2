const express=require('express')
const route=express.Router();
const userController=require('../controller/userController')
route.post("/createuser",userController.addnewuser);
route.get("/getuser",userController.getuser) 
route.post("/updateuser",userController.updateUser)
route.post("/deleteuser",userController.deleteUser)
module.exports=route; 