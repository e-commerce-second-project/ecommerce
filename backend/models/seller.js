const {  DataTypes } = require('sequelize');
const connection=require('../db')
const {sequelize}=require('../db')

const Seller = sequelize.define('seller', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING
    }
  });
 
  module.exports=Seller