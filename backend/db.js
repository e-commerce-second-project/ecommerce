const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const Product = require("./models/product.js");
const User = require("./models/user.js");
const Rating = require("./models/rating.js");
const Images = require("./models/images.js");

const sequelize = new Sequelize("ecommerce", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const product = sequelize.define("product", Product);
const user = sequelize.define("user", User);
const rating = sequelize.define('rating_prod', Rating)
const images = sequelize.define('images', Images)


product.belongsToMany(user, {through: "wishlist"})
product.belongsToMany(user, {through: "cart"})
product.belongsToMany(user, {through: rating})
product.hasMany(images)
user.hasMany(product)






try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = {
  sequelize,product,user,images
};
