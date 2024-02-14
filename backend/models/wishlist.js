const {  DataTypes } = require('sequelize');
const connection=require('../db')
const {sequelize}=require('../db')

const Wishlist = sequelize.define('wishlist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });

  module.exports = Wishlist