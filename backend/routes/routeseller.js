const prodSeller=require('express').Router()
const productController=require('../controller/sellercontroller')


prodSeller.get('/allProducts',productController.getProducts)
prodSeller.get('/getOneProd',productController.getOneProd)
prodSeller.post('/addProd',productController.addProd)
prodSeller.delete('/deleteProd/:ProductID',productController.deleteProd)
prodSeller.put('/updateProd/:ProductID',productController.updateProd)
prodSeller.get('/prodsOfUser/:UserID',productController.getProdOfUser)







module.exports= prodRouter;