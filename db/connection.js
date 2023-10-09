const { MongoClient}=require('mongodb')
// {useNewUrlParser:true}
const uri="mongodb+srv://jeggammahesh15720:mahesh@cluster0.d2xzw2z.mongodb.net/"
const client=new MongoClient(uri)
module.exports=client