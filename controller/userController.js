const client=require('../db/connection')
const db=client.db("Human_Resources")
const collection=db.collection("employee")
const addnewuser=(req,res)=>{
    try{
        collection.insertMany([{
            
            "firstName": "John",
            "lastName": "Doe",
            "salary": "25000",
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": "10000",
            "overallExp": "2",
            "contactInfo": "1234567890",
            "yearGrad": "2016",
            "gradStream": "CSE"
          },{
            
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
           
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            
            "firstName": "Jame",
            "lastName": "roh",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
           
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          },{
            
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
            
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "20000",
            "overallExp": "1",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "ECE"
          },{
            
            "firstName": "Sao",
            "lastName": "Avika",
            "salary": "30000",
            "department": "Sales",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
          },{
           
            "firstName": "Jame",
            "lastName": "Doe",
            "salary": "35000",
            "department": "Accounts",
            "lastCompany": "Z",
            "lastSalary": "15000",
            "overallExp": "2",
            "contactInfo": "123567890",
            "yearGrad": "2019",
            "gradStream": "EEE"
          }
        ]
),
res.status(200).send({msg:"data inserted"})   
}
catch(e){
    res.status(500).send({error:e})
}}
const getuser=  async(req,res)=>{
    const query={"firstName":"Jame"}
try{
    // const emp_list= await collection.find({}).toArray();
    // console.log("user:",emp_list)
    const salaryemp=await collection.find({"salary":{$gt:"30000"}}).toArray();
    console.log("salaryemp",salaryemp);
    const overallExp=await collection.find({"overallExp":{$gt:"2"}}).toArray()
    console.log("overall exp",overallExp);
const query4=await collection.find({"yearGrad":{$gt:"2015"},"overallExp":{$gt:"1"}}).toArray()
   console.log("graduated after 2015 and overall exp grter than 1 year",query4);
    
    res.send({msg:"user found",result:query4})
}
catch(e){
    console.log(e);
    res.send({error:e})
}
}
const updateUser=async (req,res)=>{
    const query={name:"ajay"}
try{
    const updatedsalary= await collection.updateMany({"salary":{$gt:"70000"}},{$inc:{"salary":-5000}})
    console.log("user:",updatedsalary)
    res.status(200).send({msg:"user details updated",result:updatedsalary})
}
catch(e){
    console.log(e);
    res.status(500).send({error:e})
}
}
const deleteUser=async (req,res)=>{
    const query={"lastCompany":"Y"}
try{
    const result= await collection.deleteMany(query)
    console.log("user:",result)
    res.send({msg:"user details updated",result:result})
}
catch(e){
    console.log(e);
    res.status(500).send({error:e})
}
}
module.exports={addnewuser,getuser,updateUser,deleteUser}