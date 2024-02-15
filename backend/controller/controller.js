require("dotenv").config
const User = require('../../backend/models/user')
const bcrypt =require('bcrypt')
module.exports={
    getUsers:async(req, res) => {
    let us=await User.findAll()
    res.json(us)
},

addUser:async(req,res)=>{
    console.log(req.body)
    let ad=await User.create(req.body)
    res.json(ad)
}
}
const getOneUser=(email)=>{
    return User.findOne({where:{email:email}})
}
module.exports=getOneUser