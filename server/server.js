const express = require('express')
const cors = require ('cors')
const {sequelize}=require('../backend/db')
// const  User=require('../backend/models/user')
// const  Product=require('../backend/models/product')
// const  Wishlist=require('../backend/models/wishlist')
// const  ShoppingCart=require('../backend/models/shoppingcart')





// sequelize.sync()
//   .then(() => {
//     console.log('Database & tables created!');
//   })
//   .catch(error => {
//     console.error('Error creating database:', error);
//   });

const PORT = 3300
const app = express()
app.use(express.json())

app.use(express.static(__dirname + '../public'))
app.use(cors())




app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
