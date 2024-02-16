
const {product,user,}= require('../db')
const sequelize=require("sequelize")

  const deleUser = async(req,res)=>{
    let id =  req.params.id
    try{
      let result =  await user.destroy({where: {id:id}})
      res.json(result)
    }
    catch(err){console.log(err)}
  }
  
  const updateUser = async(req,res)=>{
    let id = req.params.id
    let newrole= req.body
    try{
      let result =  await user.update({role:newrole},{where:{id:id}})
      res.json(result)
    }
    catch(err){console.log(err)}
  }

  const findClient= async(req,res)=>{
      try{
      let result = await user.findAll({where: {role: 'client'}})
      res.json(result)}
      catch(err){console.log(err);}}
  

  const findSeller= async(req,res)=>{
    try{
      let result = await user.findAll({where: {role: 'seller'}})
    res.json(result)}
    catch(err){console.log(err);}}


    const findSellerProd=async(req,res) => {
      try {
      const result=await product.findAll({where:{userId:req.params.id}});
      res.json(result) 
      } catch (error) {res.send(error)}
  }

  
const getProducts = async (req, res) => {
  try {
    const products = await product.findAll()
    res.json(products);
  } catch (err) {
    console.error( err);
  }
}

  const delProduct= async(req,res) => {
    id= req.params.prodid
    try {
    const result=await product.destroy({where:{id:id}})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
}

const GetProduct=async(req,res) => {
  try {
  const result=await product.findOne({where:{id:req.params.id}})
  res.json(result) 
  } catch (error) {
      res.send(error)
  }
}


  const updateprod = async (req, res) => {
    try {
      const Id = req.params.productId;
      const newCat= req.body.category;
      let result =await product.update({ category: newCat }, { where: { id: Id } });
      res.json(result)
    } catch (err) {
      console.error('Error updating category:', err)}
  }




  







  module.exports={updateprod,getProducts,findClient,findSeller,updateUser,deleUser}