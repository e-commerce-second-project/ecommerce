const { Sequelize, DataTypes } = require('sequelize');
const {sequelize}=require('../db')

const User = {
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
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }

  };

  module.exports=User
  