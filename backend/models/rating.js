const { DataTypes } = require("sequelize");

const rating =  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rate:{
    type: DataTypes.INTEGER
    }
  };

  module.exports=rating