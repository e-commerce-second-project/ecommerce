const {  DataTypes } = require('sequelize');
const {sequelize}=require('../db.js');
const User = require('./user.js');

const Product =  {
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
    sold : {
      type: DataTypes.INTEGER
    }
    
  };

  module.exports = Product