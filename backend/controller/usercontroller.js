const {product} = require('../db');
const {images} = require('../db'); 
const { Op } = require('sequelize');
const {user} = require('../db'); 
const {sequelize}=require('../db')
const getProducts = async (req, res) => {
  try {
    const products = await product.findAll({ include: [{ model: images }] });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}


const searchProducts = async (req, res) => {
  try {
    const { name, category } = req.query;
    let whereCondition = {};

    if (name) {
      whereCondition.name = { [Op.like]: `%${name}%` };
    }

    if (category) {
      whereCondition.category = category;
    }

    const products = await product.findAll({
      where: whereCondition,
      include: [{ model: images }],
    });

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const addProductToWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    await sequelize.query(`
      INSERT INTO wishlist (userId, productId, createdAt,updatedAt)
      VALUES (:userId, :productId, NOW(),NOW())
    `, {
      replacements: { userId, productId }
    });

    res.status(200).json({ message: 'Product added to wishlist successfully.' });
  } catch (error) {
    console.error('Error adding product to wishlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const getProductsFromWishlist = async (req, res) => {
  try {
    const { userId } = req.params;

    const products = await sequelize.query(`
      SELECT p.*, i.image
      FROM products p
      INNER JOIN wishlist w ON p.id = w.productId
      INNER JOIN images i ON p.id = i.productId
      WHERE w.userId = :userId
    `, {
      replacements: { userId },
      type: sequelize.QueryTypes.SELECT
    });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error retrieving products from wishlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const deleteProductFromWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    await sequelize.query(`
      DELETE FROM wishlist
      WHERE userId = :userId AND productId = :productId
    `, {
      replacements: { userId, productId }
    });

    res.status(200).json({ message: 'Product removed from wishlist successfully.' });
  } catch (error) {
    console.error('Error removing product from wishlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports =  {getProducts,searchProducts,deleteProductFromWishlist,addProductToWishlist,getProductsFromWishlist} 

