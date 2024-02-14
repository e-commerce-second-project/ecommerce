const {  DataTypes } = require('sequelize');
const connection=require('../db')
const {sequelize}=require('../db')

const Product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false

    },
    image: {
      type: DataTypes.STRING
    }
  });
  module.exports=Product