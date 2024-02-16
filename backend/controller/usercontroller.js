const {product} = require('../db');
const {images} = require('../db'); 
const { Op } = require('sequelize');

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

module.exports =  {getProducts,searchProducts} 

