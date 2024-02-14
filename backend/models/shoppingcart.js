const {  DataTypes } = require('sequelize');
const connection=require('../db')
const {sequelize}=require('../db')


const ShoppingCart = sequelize.define('shopping_cart', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  });

  module.exports=ShoppingCart