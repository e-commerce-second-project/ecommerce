const routeruser=require("express").Router()
const controlleruser=require('../controller/usercontroller')


routeruser.get('/allproducts',controlleruser.getProducts)
routeruser.get('/search',controlleruser.searchProducts)
routeruser.post('/addtowishlist',controlleruser.addProductToWishlist)
routeruser.get('/getallwishlistproducts/:userId',controlleruser.getProductsFromWishlist)
routeruser.delete('/deletefromwishlist',controlleruser.deleteProductFromWishlist)



module.exports=routeruser