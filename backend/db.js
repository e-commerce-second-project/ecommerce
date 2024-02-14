const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const mysql=require('mysql2')

const connection = mysql.createConnection({
  host: "localhost",
  user: "yessine",
  password: "yessine147",
});
connection.query(
`  CREATE DATABASE IF NOT EXISTS ecommerce
`,
  function (err, results) {
    console.log(results);
    console.log(err);
  }
);
const sequelize = new Sequelize('ecommerce', 'yessine', 'yessine147', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}




















module.exports = {
 connection,
 sequelize
};
