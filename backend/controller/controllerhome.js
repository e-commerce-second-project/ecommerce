const {sequelize} = require("../db.js")
const {product}=require("../db.js")
const {user}= require("../db.js")
const {images}= require("../db.js")

const getProducts = async (req, res) => {
    try {
      const products = await product.findAll({ include: [{ model: images }] });
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  const addProductToCart = async (req, res) => {
    try {
      const { userId, productId } = req.body;
  
      await sequelize.query(
        `INSERT INTO cart (userId, productId, createdAt,updatedAt)
        VALUES (:userId, :productId, NOW(),NOW())`
      , {
        replacements: { userId, productId }
      });
  
      res.status(200).json({ message: 'Product added to cart successfully.' });
    } catch (error) {
      console.error('Error adding product to cart:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}
const getProductsFromCart = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const products = await sequelize.query(
        `SELECT p.*, i.image
        FROM products p WHERE c.userId = :userId
        INNER JOIN cart c ON p.id = c.productId
        INNER JOIN images i ON p.id = i.productId`
        ,{
          replacements: { userId },
          type: sequelize.QueryTypes.SELECT
        }
      );
  
      res.status(200).json(products);
    } catch (error) {
      console.error('Error retrieving products from cart:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  module.exports={getProducts,addProductToCart,getProductsFromCart}