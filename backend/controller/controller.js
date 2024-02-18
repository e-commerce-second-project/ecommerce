require("dotenv").config
const User = require('../../backend/models/user')
const bcrypt =require('bcrypt')
const db =require('../db')
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
module.exports={
    getOneUser:async(email)=>{
    let go=await db.User.findOne({where:{email:email}})
    res.json(go)
}
}
// module.exports=getOneUser