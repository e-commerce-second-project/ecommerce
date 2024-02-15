const{User}=require('../models/user')
const{product}= require('../models/product')


const getProducts = async (req, res) => {
    try {
      const products = await product.findAll();
      res.json(products);
    } catch (err) {
      console.error( err);
    
    }
  }


const findClient= async(req,res)=>{
    try{
    let result = await User.findAll({where: {role: 'client'}})
    res.json(result)}
    catch(err){console.log(err);}}


const findSeller= async(req,res)=>{
    try{
    let result = await User.findAll({where: {role: 'seller'}})
    res.json(result)}
    catch(err){console.log(err);}}



  const updateprod = async (req, res) => {
    try {
      const Id = req.params.productId;
      const newCat= req.body.category;
      let result =await product.update({ category: newCat }, { where: { id: Id } });
      res.json(result)
    } catch (err) {
      console.error('Error updating category:', err)
    }
  }