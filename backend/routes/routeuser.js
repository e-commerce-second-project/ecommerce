const routeruser=require("express").Router()
const controlleruser=require('../controller/usercontroller')


routeruser.get('/allproducts',controlleruser.getProducts)



module.exports=routeruser