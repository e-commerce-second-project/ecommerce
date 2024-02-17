const router= require("express").Router()
const controller=require("../controller/controllerhome.js")

router.get("/getAllForHome",controller.getProducts)
router.post("/addToCart",controller.addProductToCart)
router.get("/getInCart",controller.getProductsFromCart)
module.exports=router