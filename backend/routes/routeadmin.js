const routeradmin=require("express").Router()
const controlleradmin=require('../controller/admincontroller')


routeradmin.get('/allproducts',controlleradmin.getProducts)
routeradmin.get('/allClient',controlleradmin.findClient)
routeradmin.get('/allSeller',controlleradmin.findSeller)
routeradmin.put('/updateprod/:productId',controlleradmin.updateprod)
routeradmin.put('/updateuser',controlleradmin.updateUser)
routeradmin.delete('/deleteuser',controlleradmin.deleUser)



module.exports= routeradmin


