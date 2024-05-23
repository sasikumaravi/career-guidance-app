const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    mail:String,
    password:String,
    dob:String,
    education:String
})

const UserModel=mongoose.model('user',userSchema)

module.exports=UserModel