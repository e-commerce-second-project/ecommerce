const {  DataTypes } = require('sequelize');
const {sequelize}=require('../db');
const User = require('./user');

const Images =  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: DataTypes.STRING,
    }
    
  };

  module.exports = Images