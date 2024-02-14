const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const Product = require("./models/product");
const User = require("./models/user");
const Rating = require("./models/rating");
const Images = require("./models/images");

const sequelize = new Sequelize("ecommerce", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const product = sequelize.define("product", Product);
const user = sequelize.define("user", User);
const rating = sequelize.define('rating_prod', Rating)
const images = sequelize.define('images', Images)

console.log(sequelize.models);
product.belongsToMany(user, {through: "wishlist"})
product.belongsToMany(user, {through: "cart"})
product.belongsToMany(user, {through: rating})
product.hasMany(images)
user.hasMany(product)




console.log(sequelize.models);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = {
  sequelize,
};
