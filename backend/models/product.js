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
    quantity:{
        type: DataTypes.INTEGER
  
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
    rate:{
        type: DataTypes.INTEGER

    },
    image: {
      type: DataTypes.STRING
    }
  });
  module.exports=Product