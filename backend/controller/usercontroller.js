const {product} = require('../db');
const {images} = require('../db'); 

const getProducts = async (req, res) => {
  try {
    const products = await product.findAll({ include: [{ model: images }] });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports =  {getProducts} 
