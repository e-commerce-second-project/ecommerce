const routeruser=require("express").Router()
const controlleruser=require('../controller/usercontroller')


routeruser.get('/allproducts',controlleruser.getProducts)
routeruser.get('/search',controlleruser.searchProducts)



module.exports=routeruser